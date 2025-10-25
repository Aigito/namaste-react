import express from "express";
import NodeCache from "node-cache";
import { retrieveSwiggyCookie } from "./retrieve-Swiggy-cookie.js";

const app = express();
const cache = new NodeCache({ stdTTL: 3600 });

// Route 1: Swiggy Restaurants API
app.get("/api/restaurants", async (req, res) => {
  const cacheKey = "restaurants"

  try {
    if (cache.has(cacheKey)) return res.json(cache.get(cacheKey));

    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
        }
      }
    );

    if (!response.ok) throw new Error("Swiggy API error");

    const data = await response.json();
    cache.set(cacheKey, data);
    res.json(data);
  } catch (err) {
    console.error("❌ Something went wrong with fetching restaurants:", err.message);
    res.status(500).json({ error: "❌ Something went wrong with fetching restaurants" });
  }
})

// Route 2: Swiggy Restaurants Menu API
app.get("/api/restaurants/menu/:resId", async (req, res) => {
  const { resId } = req.params;

  const cacheKey = `menu-${resId}`;

  if (cache.has(cacheKey)) return res.json(cache.get(cacheKey));

  try {
    const cookie = await retrieveSwiggyCookie();

    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=${resId}`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
          "Cookie": cookie
        },
      }
    )

    const data = await response.json();
    const filteredData = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    cache.set(cacheKey, filteredData);
    res.send(filteredData);
  } catch (err) {
    console.error("❌ Something went wrong with fetching restaurant menu items:", err.message, err.stack);
    res.status(500).json({ error: "❌ Something went wrong with fetching restaurant menu items:" });
  }
});

// ✅ Always put app.listen LAST
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});