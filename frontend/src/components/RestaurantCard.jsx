const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, availability, cloudinaryImageId } = props?.data || {};
  return (
    <div className="flex flex-col w-[400px] h-[500px] p-4 m-4 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="block mx-auto w-fit"
        // This is just a Mock API that Akshay provided, img does not work
        src={"https://media.istockphoto.com/id/1954460241/photo/taiwan-milk-tea-with-boba-bubble-pearl-on-plastic-disposable-cup.jpg?s=2048x2048&w=is&k=20&c=UucIC69cuL_oH7sfaDETXX6TGHJv_yLpmdBbcVOc9VU="}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="my-2">{avgRating} 🌟</h4>
      <h4 className="mt-auto">{availability.opened ? `Open Until: ${availability.nextCloseTime}` : "Closed"}</h4>
    </div>
  );
};

export default RestaurantCard;