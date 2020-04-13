import React from "react";

const Person = ({ email, picture, first, last, cell }) => {
  return (
    <div className="tc bg-light-blue br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br3" alt="person" src={picture} />
      <div>
        <h2>
          Name:{first}
          {last}
        </h2>
        <p>Email:{email}</p>
        <p>Phone:{cell}</p>
      </div>
    </div>
  );
};

export default Person;
