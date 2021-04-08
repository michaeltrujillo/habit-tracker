import React from "react";
import HabitAPI from "../utils/HabitAPI";
import { Link } from "react-router-dom";

function CurrentHabits(props) {

  function deleteHabit(id) {
    HabitAPI.deleteHabitItem(id)
        .then(res => props.loadHabits())
        .catch((err) => console.log(err.response)); 
  }

  return (
    <div className = "container">
      <h1>Current Habits</h1>
      <ul className="list-group">
          {props.habits.map((habit) => (
            <div className="input-group mb-1" key={habit._id}>
              <Link to={`/habit/${habit._id}`} style={{color: "black"}} >
                <li className="list-group-item">{habit.name}</li>
              </Link>
              <div className="input-group-append">
                <button type="submit" className="btn btn-danger" onClick={() => deleteHabit(habit._id)}> 
                    -
                </button>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default CurrentHabits;