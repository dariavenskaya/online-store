import React from "react";

// import debounce from "lodash.debounce";

import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

function Sort() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  const inputRef = React.useRef();
  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="25"
        height="25">
        <g id="_01_align_center" data-name="01 align center">
          <path
            d="M24,22.586l-6.262-6.262a10.016,10.016,0,1,0-1.414,1.414L22.586,24ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"
            fill="#98a3b9"
          />
        </g>
      </svg>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="search..."
      />
      {searchValue && (
        <svg
          onClick={onClickClear}
          className={styles.clear}
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="20"
          height="20">
          <path
            d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"
            fill="#98a3b9"
          />
        </svg>
      )}
    </div>
  );
}
export default Sort;
