import React from "react";

function Card({person}) {
  let name = person.name;
  let source = person.source;
  let phone = person.phone;
  let email = person.email;

  return (
    <div>
      <h2>{name}</h2>
      <img src={source} alt="Sample props" />
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}
export default Card;
