import React from "react";

function HabitButtons(props) {
    return (
        <div className="row" style={{textAlign: "center"}}>
            <div className="col"><button type="button" className="btn btn-secondary">Edit Habit</button></div>
            <div className="col"><button type="button" className="btn btn-danger">Add New Note</button></div>
            <div className="col"><button type="button" className="btn btn-success">Save changes</button></div>
        </div>
    );
}


export default HabitButtons;

