export const RatingStar = ({ star }) => {
  const starArray = Array.from(Array(star).keys());

  return (
    <>
      {starArray.map((star) => (
        <span key={star}>
          <i className="fas fa-star"></i>
        </span>
      ))}
    </>
  );
};
