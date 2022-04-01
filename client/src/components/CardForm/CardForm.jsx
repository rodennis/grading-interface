import React, {useState} from "react";

function CardForm({ index, setTags, tags, card }) {

  const [tagInput, setTagInput] = useState("");

  const addTag = (tag) => {
    const newTag = [tag, ...tags];
    setTags(newTag);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTag({
          id: index,
          text: tagInput,
          name: card.firstName
        });
        setTagInput('')
      }}
    >
      <input
        onChange={(e) => setTagInput(e.target.value)}
        type="text"
        className="tag-input"
        placeholder="Add a tag"
      />
    </form>
  );
}

export default CardForm;
