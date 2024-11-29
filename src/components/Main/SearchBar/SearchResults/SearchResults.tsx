import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import { TicketType } from "@AppTypes/commonTypes";
import getUniqueTransfers from "@Utils/getUniqueTransfers";
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

  console.log(uniqueTransfers);

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
      {tickets.length > 0 ? (
        <ul>
          {tickets
            .filter((_, index) => index < 5)
            .map((ticket: TicketType, index) => (
              <li key={index}>
                <div>{ticket.carrier}</div>
                <div>{ticket.price}</div>
                <div>{ticket.segments[0].stops.length}</div>
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
