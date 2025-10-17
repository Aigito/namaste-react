import { ShimmerThumbnail } from "react-shimmer-effects";

const Shimmer = ({ count }) => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: count }).map((_, idx) => (
        <ShimmerThumbnail
          key={idx}
          height={300}
          width={200}
          rounded
          className="shimmer-card"
        />
      ))}
    </div>
  )
};

export default Shimmer;