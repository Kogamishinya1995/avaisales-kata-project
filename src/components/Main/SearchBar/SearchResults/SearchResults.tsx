import { useState, useEffect } from "react";
import {
  useGetSearchIdQuery,
  useGetTicketsQuery,
  Ticket,
} from "../../../../slices/ticketsAPI";

const SearchResults = () => {
  const [searchId, setSearchId] = useState<string>("");
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isSearchComplete, setIsSearchComplete] = useState(false);

  const { data: searchIdData } = useGetSearchIdQuery(null);

  useEffect(() => {
    if (searchIdData?.searchId) {
      setSearchId(searchIdData.searchId);
    }
  }, [searchIdData]);

  const {
    data: ticketsData,
    refetch: fetchTickets,
    isFetching,
    error,
  } = useGetTicketsQuery(searchId, {
    skip: !searchId || isSearchComplete,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (ticketsData) {
          setTickets((prev) => [...prev, ...ticketsData.tickets]);

          if (ticketsData.stop) {
            setIsSearchComplete(true);
          } else {
            await fetchTickets();
          }
        }

        if (error && !isSearchComplete) {
          await fetchTickets();
        }
      } catch (err) {
        console.error("Ошибка при запросе билетов:", err);
      }
    };

    void fetchData();
  }, [ticketsData, error]);

  return (
    <div className="search-bar__results">
      <h2>Search Results</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>{JSON.stringify(ticket)}</li>
        ))}
      </ul>
      {isFetching && <p>Loading...</p>}
      {isSearchComplete && <p>Поиск завершён!</p>}
    </div>
  );
};

export default SearchResults;
