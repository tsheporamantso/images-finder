import React, { useState } from "react";
import { toast } from "react-toastify";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) {
      toast.error("Cannot submit empty field!");
      return;
    }
  };

  return (
    <section>
      <h1 className="title">Images Finder</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search Image"
          className="form-input search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
