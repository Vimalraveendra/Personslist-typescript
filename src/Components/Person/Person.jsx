import React from "react";

const Person = ({ email, image, firstname, lastname, phone }) => {
  return (
    <div className="tc bg-light-blue br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br3" alt="person" src={image} />
      <div>
        <h2>
          Name:{firstname}
          {lastname}
        </h2>
        <p>Email:{email}</p>
        <p>Phone:{phone}</p>
      </div>
    </div>
  );
};

export default Person;
