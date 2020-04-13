import React from "react";
import Person from "../Person/Person";
import "./PersonsList.css";
import { IPersons } from "../../Containers/App";

const PersonsList = ({ persons }: { persons: Array<IPersons> }) => {
  return (
    <div className="personslist-container">
      {persons.map(user => {
        return (
          <Person
            key={user.login.uuid}
            first={user.name.first}
            last={user.name.last}
            email={user.email}
            picture={user.picture.large}
            cell={user.cell}
          />
        );
      })}
    </div>
  );
};

export default PersonsList;
