import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../slices/index";
import {
  fetchSearchId,
  fetchTickets,
  Ticket,
} from "../../../../slices/ticketsSlice";

const SearchResults = () => {
  const dispatch: AppDispatch = useDispatch();

  const { searchId, tickets, loadingStatus, error } = useSelector(
    (state: RootState) => state.tickets
  );

  const fetchAllTickets = async (currentSearchId: string) => {
    if (loadingStatus === "loading") return;

    try {
      const result = await dispatch(fetchTickets(currentSearchId)).unwrap();
      if (!result.stop) {
        await fetchAllTickets(currentSearchId);
      }
    } catch (err) {
      console.error("tickets request error", err);
      await fetchAllTickets(currentSearchId);
    }
  };

  useEffect(() => {
    void dispatch(fetchSearchId());
  }, []);

  useEffect(() => {
    if (searchId && loadingStatus === "succeeded" && tickets.length === 0) {
      void fetchAllTickets(searchId);
    }
  }, [searchId, loadingStatus, tickets.length]);

  return (
    <div className="search-bar__results">
      <h2>Search Results</h2>
      {loadingStatus === "loading" && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {tickets.map((ticket: Ticket, index) => (
          <li key={index}>
            <div>{ticket.carrier}</div>
            <div>{ticket.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
