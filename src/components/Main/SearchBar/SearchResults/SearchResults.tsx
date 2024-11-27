import { useGetSearchIdQuery } from "../../../../slices/ticketsAPI";

const SearchResults = () => {
  const { data, error, isLoading, refetch } = useGetSearchIdQuery(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="search-bar__results">
      <h2>Search Results</h2>
      <p>Search ID: {data?.searchId}</p>
      <button onClick={refetch}>тестовое</button>
    </div>
  );
};

export default SearchResults;
