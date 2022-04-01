import React, { useEffect, useState } from "react";
import "./Cards.css";
import Plus from "../../photos/plus.png";
import Minus from "../../photos/minus.png";
import CardInfo from "../CardInfo/CardInfo";

function Cards({ data, searchField, tags, setTags, tagSearchField }) {
  const [search] = useState(["firstName", "lastName"]);
  const [tagSearch] = useState(["text"]);
  const [setIndex, setSetIndex] = useState();
  const [tagName, setTagName] = useState("");

  const searchFunction = () => {
    if (searchField !== null) {
      return data.filter((person) => {
        return search.some((newPerson) => {
          return (
            person[newPerson]
              .toString()
              .toLowerCase()
              .indexOf(searchField.toLowerCase()) > -1
          );
        });
      });
    } else if (tagName !== null) {
      return data.filter((person) => {
        return search.some((newPerson) => {
          return (
            person[newPerson]
              .toString()
              .toLowerCase()
              .indexOf(tagName.toLowerCase()) > -1
          );
        });
      });
    } else return data;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const foundTags = () => {
    return tags?.filter((tag) => {
      return tagSearch.some((newTag) => {
        return (
          tag[newTag]
            .toString()
            .toLowerCase()
            .indexOf(tagSearchField.toLowerCase()) > -1
        );
      });
    });
  };

  useEffect(() => {
    if (!foundTags) return data;
    else setTagName(foundTags()[0].name);
  }, [foundTags]);

  return (
    <div>
      {data &&
        searchFunction(data).map((card, index) => (
          <div key={card.id} className="card">
            <div className="left-side">
              <img src={card.pic} alt="Profile imgd" />
            </div>
            <div className="right-side">
              <CardInfo
                index={index}
                card={card}
                tags={tags}
                setTags={setTags}
                setIndex={setIndex}
              />
              <div className="drop-down-dutton">
                {setIndex === index ? (
                  <button onClick={(e) => setSetIndex("")} className="minus">
                    <img src={Minus} alt="" />
                  </button>
                ) : (
                  <button onClick={(e) => setSetIndex(index)} className="plus">
                    <img src={Plus} alt="" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cards;
