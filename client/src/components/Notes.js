import React from "react";

function Notes(props) {

  return (
    <div style={{textAlign: "center"}}>
        <h2 id="notesHeader">Notes:</h2>
        <div className="notes">
            <h3>4/13/2022</h3>
            <h4 className="fst-italic">couldn't facetime mom because i didn't have service</h4>
        </div>
    </div>
  );
}

export default Notes;