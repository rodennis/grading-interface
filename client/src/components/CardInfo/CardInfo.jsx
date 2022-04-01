import React from 'react'
import Form from "../CardForm/CardForm";
import Tags from "../Tags/Tags";

function CardInfo({card, index, setIndex, tags, setTags}) {
  return (
    <div className="info">
                <h2>{`${card.firstName?.toUpperCase()} ${card.lastName?.toUpperCase()}`}</h2>
                <p>Email: {card.email}</p>
                <p>Company: {card.company}</p>
                <p>Skill: {card.skill}</p>
                <p>Average: {card.Average}</p>
                <div className={setIndex === index ? "tests" : "tests-hidden"}>
                  {card.grades?.map((grade, index) => (
                    <p key={index}>
                      Test {index + 1}: {grade}%
                    </p>
                  ))}
                </div>
                <Tags tags={tags} index={index} />
                <Form
                  tags={tags}
                  setTags={setTags}
                  index={index}
                  card={card}
                />
              </div>
  )
}

export default CardInfo