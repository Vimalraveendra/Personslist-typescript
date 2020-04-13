import React from "react";
import Person from "../Person/Person";
import "./PersonsList.css";

const PersonsList = ({ persons }) => {
  return (
    <div className="personslist-container">
      {persons.map(user => {
        return (
          <Person
            key={user.login.uuid}
            firstname={user.name.first}
            lastname={user.name.last}
            email={user.email}
            image={user.picture.large}
            phone={user.cell}
          />
        );
      })}
    </div>
  );
};

export default PersonsList;
