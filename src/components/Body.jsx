import RestaurantCard from "./RestaurantCard";

const restaurantList = [
  {
    id: "random1",
    name: "Pondok Daun",
    cuisine: "Indonesian, Non-Spicy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8nfimdarqId_8uxMv0k2RYgvurn15yQF7Q&s"
  },
  {
    id: "random2",
    name: "18th Street Hot Pot",
    cuisine: "Chinese, Spicy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaO5N1DzuW56B9xqxXRpSEZSfEwXZizCx8mg&s"
  }
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurants-container">
        {restaurantList.map((res, idx) => (
          <RestaurantCard key={res.id} data={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;