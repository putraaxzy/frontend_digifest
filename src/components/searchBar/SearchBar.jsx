import { useState } from "react";
import "./searchBar.scss";

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <form>
        <input
          type="text"
          name="location"
          placeholder="Mulai Cari Pondok Pesantren!"
        />
        <button>
          <img src="/search.png" alt="Search" className="search-icon" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
