const RestaurantCard = (props) => {
  const { name, cuisine, img } = props?.data
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-img"
        src={img}
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>5.0/5.0</h4>
      <h4>3.0 km</h4>
    </div>
  );
};

export default RestaurantCard;