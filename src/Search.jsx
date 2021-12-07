import React from "react";
import "../src/App.css";

export default function Search(props) {
  return (
    <>
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="Search by Name or date formate '2021-11-30'"
            onChange={(e) => {
              props.setSearchTearm(e.target.value);
            }}
          />
          {/* <button
            onClick={searchHandler}
            className="search-button"
            type="submit"
          >
            <span className="search-fas">SEARCH</span>
          </button> */}
        </form>
      </div>
    </>
  );
}
