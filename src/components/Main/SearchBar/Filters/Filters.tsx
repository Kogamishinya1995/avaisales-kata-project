import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MouseEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FilterState } from "@AppTypes/commonTypes";
import { setFilter } from "../../../../slices/filterSlice";
import { RootState } from "../../../../slices/index";

const Filters = () => {
  const filterState = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (
    _event: MouseEvent<HTMLElement>,
    newSelected: string
  ) => {
    dispatch(setFilter(newSelected));
  };

  return (
    <ToggleButtonGroup
      value={filterState.value}
      exclusive
      onChange={handleChange}
      aria-label="text alignment"
      className="search-bar__filters"
    >
      <ToggleButton value="cheepest" aria-label="left aligned">
        самый дешевый
      </ToggleButton>
      <ToggleButton value="fastest" aria-label="centered">
        самый быстрый
      </ToggleButton>
      <ToggleButton value="optimal" aria-label="right aligned">
        оптимальный
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filters;
