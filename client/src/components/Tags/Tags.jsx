import React from "react";

function Tags({ tags, index }) {
  return (
    <div className="tag-div">
      {tags.map(
        (tag) =>
          tag.id === index && (
            <h6 className="tag" key={tag.id}>
              {tag.text}
            </h6>
          )
      )}
    </div>
  );
}

export default Tags;
