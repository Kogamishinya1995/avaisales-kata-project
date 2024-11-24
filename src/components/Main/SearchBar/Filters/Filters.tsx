import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

const Filters = () => {
  const [selected, setSelected] = useState(null);

  const handleChange = (event, newSelected) => {
    if (newSelected !== null) {
      setSelected(newSelected);
    }
  };

  return (
    <ToggleButtonGroup
      value={selected}
      exclusive
      onChange={handleChange}
      aria-label="text alignment"
      className="search-bar__filters"
    >
      <ToggleButton value="button1" aria-label="left aligned">
        самый дешевый
      </ToggleButton>
      <ToggleButton value="button2" aria-label="centered">
        самый быстрый
      </ToggleButton>
      <ToggleButton value="button3" aria-label="right aligned">
        оптимальный
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filters;
