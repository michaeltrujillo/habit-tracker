import React from "react";
import { Link } from "react-router-dom";

function CurrentHabits(props) {

  return (
    <div className = "container">
        <h1>Current Habits</h1>
        <ul className="list-group">
            {props.habits.map((habit) => (
                <Link to={`/habit/${habit._id}`} style={{color: "black"}} key={habit._id}>
                  <li className="list-group-item" >{habit.name}</li>
                </Link>
            ))}
        </ul>
        
    </div>
  );
}

export default CurrentHabits;