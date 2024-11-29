import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import { TicketType } from "@AppTypes/commonTypes";
import { RootState, AppDispatch } from "../../../../slices/index";
import { fetchSearchId } from "../../../../slices/ticketsSlice";
import { fetchAllTickets } from "../../../../utils/fetchAllTickets";

const SearchResults = () => {
  const dispatch: AppDispatch = useDispatch();

  const { searchId, tickets, loadingStatus, error } = useSelector(
    (state: RootState) => state.tickets
  );

  useEffect(() => {
    void dispatch(fetchSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (searchId && loadingStatus === "succeeded" && tickets.length === 0) {
      void fetchAllTickets(searchId, dispatch, loadingStatus);
    }
  }, [searchId, loadingStatus, tickets.length, dispatch]);

  console.log(tickets);

  return (
    <div className="search-bar__results">
      {loadingStatus === "loading" && (
        <BeatLoader
          color={"#89BAFF"}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          loading={true}
          speedMultiplier={1}
        />
      )}
      {error && <p>Error: {error}</p>}
      <ul>
        {tickets.map((ticket: TicketType, index) => (
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
