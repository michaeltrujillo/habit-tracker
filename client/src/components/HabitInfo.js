import React from "react";
// import { Link } from "react-router-dom";

function HabitInfo(props) {
    let dateCreated = new Date(props.habit.dateCreated).toDateString();
    let beginDate = new Date(props.habit.beginDate).toDateString();
    let endDate = new Date(props.habit.endDate).toDateString();

    return (
        <div id="example" style={{textAlign: "center"}}>

            <h1>{props.habit.name}</h1>
            <button type="button" className="btn btn-secondary">Update Habit</button>

            <br/><br/>
            {/* <h3>habit description</h3> */}
            <br/>
            <h5>{props.habit.description}</h5>

            <br/>
            <h2>Days remaining: <span id="remainingDays">{props.daysRemaining}</span> </h2>
            <p>Date Created: {dateCreated}</p>
            <p>Begin Date: {beginDate}</p>
            <p>End Date: {endDate}</p>

            {/* <div id="notes">
                <h4>Notes:</h4>

                <ul id="noteList">
                    <li>
                        <h6>date:2/12</h6>
                        had a rough time completing this because work was hard
                    </li>
                </ul>
            </div>
            <button type="button" className="btn btn-success">Submit changes</button> */}

        </div>
    );
}

export default HabitInfo;