import React from "react";

function AddNoteForm(props) {
    return (
        <div>
            <br/>
            <form >
            <div id="addPopUp">
                <div className="popUpDiv">
                    <label htmlFor="noteDate" className="form-label"><strong>Select the day you want to write a notefor.</strong></label>
                    <input type="date" className="form-control" id="noteDate" name="date" onChange={props.onNoteDateChange}/>
                </div>

                <div className="popUpDiv">
                    <label htmlFor="newNoteContent"><strong>Type the text here</strong></label>
                    <br/>
                    <input type="textarea" id="newNoteContent" className="form-control" name="description" onChange={props.onNoteDescriptionChange }/>
                </div>
                <button type="button" className="btn btn-primary" onClick={props.onSubmit}>Add Note</button>
            </div>
            </form>
        </div>
    );
}


export default AddNoteForm;

