import AdditionalTicketsButton from "./AdditionalTicketsButton/AdditionalTicketsButton";
import Filters from "./Filters/Filters";
import SearchResults from "./SearchResults/SearchResults";

const SearchBar = () => (
  <div className="search-bar">
    <Filters />
    <SearchResults />
    <AdditionalTicketsButton />
  </div>
);

export default SearchBar;
