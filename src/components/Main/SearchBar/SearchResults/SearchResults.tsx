import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchId, fetchTickets } from "../../../../slices/ticketsSlice";

const SearchResults = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);

  const searchId = useSelector((state) => state.tickets.searchId);
  console.log(searchId);

  return (
    <div className="search-bar__results">
      <h2>Search Results</h2>
      <ul></ul>
    </div>
  );
};

export default SearchResults;
