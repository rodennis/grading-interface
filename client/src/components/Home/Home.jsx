import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Cards/Cards";
import "./Home.css";

function Home() {
  const url = "https://api.hatchways.io/assessment/students";
  const [data, setData] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [tagSearchField, setTagSearchField] = useState("");
  const [tags, setTags] = useState([{name: "test", text: 'test'}]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      setData(
        res.data.students.map( person => {
          const average = person.grades?.reduce(
            (a, b) => parseInt(a, 10) + parseInt(b, 10)
            ) / person.grades?.length
            person["Average"] = average
            person["tags"] = tags.filter(tag => {
              return tag.name === person.firstName
            })
            return person
          })
          )
        };
        getData();
  }, [tags]);

  return (
    <div className="container">
      <input
        onChange={(e) => setSearchField(e.target.value)}
        type="text"
        className="search"
        placeholder="Search by Name"
      />
      <input
        onChange={(e) => setTagSearchField(e.target.value)}
        type="text"
        className="search"
        placeholder="Search by Tag"
      />
      <Cards
        searchField={searchField}
        tagSearchField={tagSearchField}
        data={data}
        tags={tags}
        setTags={setTags}
      />
    </div>
  );
}

export default Home;