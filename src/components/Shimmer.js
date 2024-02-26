const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center mt-8">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="res-card-shimmer m-4"></div>
      ))}
    </div>
  );
};

export default Shimmer;
