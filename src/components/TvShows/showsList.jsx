import ShowsCard from "./showsCard";

const ShowsList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-2xl py-6 text-white font-semibold">
        {title}
      </h1>
      <div className="flex flex-wrap">
        <div className="flex gap-8 flex-wrap flex-row justify-center mb-5">
          {movies?.map((movie) => (
            <ShowsCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ShowsList;
