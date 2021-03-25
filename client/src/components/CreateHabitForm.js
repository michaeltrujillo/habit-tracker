import React from "react";

function CreateHabitForm(props) {
    return (
        <form id="newForm" onSubmit={props.onSubmit}>
            <div className="mb-3">
                <label htmlFor="habitName" className="form-label">What are you calling this habit?</label>
                <input
                    className="form-control"
                    type="text"
                    id="habitName"
                    name="name"
                    onChange={props.onNameChange}
                />
                <br/>
                <label htmlFor="habitDescription" className="form-label">describe it</label>
                <br/>
                <textarea 
                    id="habitDescription" 
                    name="description" 
                    rows="4" 
                    cols="50"
                    onChange={props.onDescriptionChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="totalDays" className="form-label">How many days will you do this for?</label>
                <input
                    className="form-control"
                    type="number"
                    id="totalDays"
                    name="numberOfDays"
                    onChange={props.onNumOfDaysChange}
                />
            </div>
            <div className="mb-3" onChange = {props.onDaysChange}>
                <label htmlFor="weekDays" className="form-label">Select the days you wish to do this.</label>
                <br/>
                <input type="checkbox" id="su" name="su"/> su
                <br/>
                <input type="checkbox" id="mo" name="mo"/> mo
                <br/>
                <input type="checkbox" id="tu" name="tu"/> tu
                <br/>
                <input type="checkbox" id="we" name="we"/> we
                <br/>
                <input type="checkbox" id="th" name="th"/> th
                <br/>
                <input type="checkbox" id="fr" name="fr"/> fr
                <br/>
                <input type="checkbox" id="sa" name="sa"/> sa
                <br/>
            </div>
            <div className="mb-3">
                <label htmlFor="totalDays" className="form-label">When will you begin?</label>
                <input
                    className="form-control"
                    type="date"
                    id="beginDate"
                    name="beginDate"
                    onChange={props.onBeginDateChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="totalDays" className="form-label">When will you end? or is it ongoing?</label>
                <input
                    className="form-control"
                    type="date"
                    id="endDate"
                    name="endDate"
                    onChange={props.onEndDateChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Create habit</button>
        </form>
    );
  }
  
export default CreateHabitForm;

