import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Selected from "./tabels/Selected";
import Types from "./tabels/Types";
import Search from "./tabels/Search";
import { useSelector } from "react-redux";

const Main = () => {
  const { data } = useSelector((state) => state.data);

  const [search, setSearch] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [checkedData, setCheckedData] = useState();
  const [selected, setSelected] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const matchesSearch = (address, word) => {
    const words = word.split(" ");
    return words.every((word) => address.includes(word));
  };

  const filteredData = data.filter((item) =>
    matchesSearch(item.address, search)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchItems(filteredData);
    setSearch("");
  };

  const onDataChange = (data) => {
    setCheckedData(data);
    const newSelected = data.filter((item) => item.value);
    setSelected(newSelected);
  };

  // console.log("selectedData", selected);
  return (
    <>
      <Nav />
      <section>
        <div className="container selected_property">
          <h4 className="title">Search</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
            />
            <button className="btn">Search</button>
          </form>
          <h4 className="title">Selected property.</h4>
          {selected.length > 0 ? (
            <Selected data={selected} />
          ) : (
            <h4 className="msg">No property is selected</h4>
          )}
        </div>
        <div className="container all-property">
          <h4 className="title">Property Type</h4>
          {searchItems && <Types data={searchItems} />}
        </div>
        <div className="container search">
          <h4 className="title">Search result</h4>
          {searchItems.length > 0 ? (
            <Search
              data={checkedData || searchItems}
              onDataChange={onDataChange}
            />
          ) : (
            <h4 className="msg">No item founded.</h4>
          )}
        </div>
      </section>
    </>
  );
};

export default Main;
