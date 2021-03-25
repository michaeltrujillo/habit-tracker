import React from "react";

function CurrentHabits(props) {

  return (
    <div className = "container">
        <h1>Current Habits</h1>
        <ul className="list-group">
            {props.habits.map((habit) => (
                <li className="list-group-item" key={habit._id}>{habit.name}</li>
            ))}
        </ul>
        
    </div>
  );
}

export default CurrentHabits;