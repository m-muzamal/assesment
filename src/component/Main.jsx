import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Selected from "./tabels/Selected";
import Types from "./tabels/Types";
import Search from "./tabels/Search";

const Main = () => {
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

const data = [
  {
    id: 1,
    address: "Mambulo",
    postcode: "63",
    type: "Brass",
    rooms: 1,
    area: 61,
    value: false,
  },
  {
    id: 2,
    address: "Balbagay",
    postcode: "1",
    type: "Plexiglass",
    rooms: 2,
    area: 37,
    value: false,
  },
  {
    id: 3,
    address: "Karobokan",
    postcode: "981",
    type: "Rubber",
    rooms: 3,
    area: 41,
    value: false,
  },
  {
    id: 4,
    address: "Conchopata",
    postcode: "2238",
    type: "Wood",
    rooms: 4,
    area: 34,
    value: false,
  },
  {
    id: 5,
    address: "Coca",
    postcode: "2238",
    type: "Wood",
    rooms: 4,
    area: 34,
    value: false,
  },
  {
    id: 6,
    address: "Conco",
    postcode: "2238",
    type: "Wood",
    rooms: 4,
    area: 34,
    value: false,
  },
  {
    id: 7,
    address: "Yiyang",
    postcode: "0",
    type: "Glass",
    rooms: 5,
    area: 70,
    value: false,
  },
];
