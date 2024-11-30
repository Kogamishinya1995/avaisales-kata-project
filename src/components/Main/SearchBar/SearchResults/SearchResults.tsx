import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import { TicketType } from "@AppTypes/commonTypes";
import getUniqueTransfers from "@Utils/getUniqueTransfers";
import sortedTickets from "@Utils/sortedTickets";
import Ticket from "./Ticket/Ticket";
import { RootState, AppDispatch } from "../../../../slices/index";
import { fetchSearchId } from "../../../../slices/ticketsSlice";
import { fetchAllTickets } from "../../../../utils/fetchAllTickets";

const SearchResults = () => {
  const dispatch: AppDispatch = useDispatch();

  const transferState = useSelector((state: RootState) => state.transfers);
  const { searchId, tickets, loadingStatus, error } = useSelector(
    (state: RootState) => state.tickets
  );

  const uniqueTransfers = useMemo(
    () => getUniqueTransfers(transferState),
    [transferState]
  );

  const transferFilteredState = useSelector((state: RootState) =>
    state.tickets.tickets.filter((ticket) =>
      ticket.segments.every((segment) =>
        uniqueTransfers.includes(segment.stops.length)
      )
    )
  );

  const filterState = useSelector((state: RootState) => state.filter.value);

  const filteredTickets = sortedTickets(transferFilteredState, filterState);

  useEffect(() => {
    if (!searchId) {
      void dispatch(fetchSearchId());
    }
  }, [dispatch, searchId]);

  useEffect(() => {
    if (searchId && loadingStatus === "succeeded" && tickets.length === 0) {
      void fetchAllTickets(searchId, dispatch, loadingStatus);
    }
  }, [searchId, loadingStatus, tickets.length, dispatch]);

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
      {filteredTickets.length > 0 ? (
        <ul>
          {filteredTickets
            .filter((_, index) => index < 10)
            .map((ticket: TicketType, index) => (
              <li key={index}>
                <Ticket ticket={ticket} />
              </li>
            ))}
        </ul>
      ) : (
        !error && loadingStatus !== "loading" && <p>No tickets found</p>
      )}
    </div>
  );
};

export default SearchResults;
