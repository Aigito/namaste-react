const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, availability } = props?.data
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-img"
        src={"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg"}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}/5.0</h4>
      <h4>{availability.opened ? `Open Until: ${availability.nextCloseTime}` : "Closed"}</h4>
    </div>
  );
};

export default RestaurantCard;