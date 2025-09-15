const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, availability, cloudinaryImageId } = props?.data || {};
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-img"
        // This is just a Mock API that Akshay provided, img does not work
        src={cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}/5.0</h4>
      <h4>{availability.opened ? `Open Until: ${availability.nextCloseTime}` : "Closed"}</h4>
    </div>
  );
};

export default RestaurantCard;