import React, { useState, useContext } from "react";
import AuthAPI from "../utils/AuthAPI";
import HabitAPI from "../utils/HabitAPI";
import { AuthContext } from "../Context/AuthContext";
import CreateHabitForm from "../components/CreateHabitForm";

function CreateHabit(props) {
    const {isAuthenticated} = useContext(AuthContext);

    const [habitName, setHabitName] = useState({});
    const [habitDescription, setHabitDescription] = useState({});
    const [numOfDays, setNumOfDays] = useState({});
    const [days, setDays] = useState([]);
    const [beginDate, setBeginDate] = useState({});
    const [endDate, setEndDate] = useState({});
    let daysArray = [];

    function handleNameInputChange(e) {
        setHabitName({[e.target.name]: e.target.value});
    }

    function handleDescriptionInputChange(e) {
        setHabitDescription({[e.target.name]: e.target.value});
    }

    function handleNumOfDaysInputChange(e) {
        setNumOfDays({[e.target.name]: e.target.value});
    }

    function handleBeginDateInputChange(e) {
        let beginDateString = e.target.value.split('-');
        let beginDateObject = new Date(beginDateString[0], beginDateString[1] - 1, beginDateString[2]); 
        setBeginDate({[e.target.name]: beginDateObject});
    }

    function handleEndDateInputChange(e) {
        let endDateString = e.target.value.split('-');
        let endDateObject = new Date(endDateString[0], endDateString[1] - 1, endDateString[2]); 
        setEndDate({[e.target.name]: endDateObject});
    }

    function handleDaysInputChange(e) {
        if (e.target.checked) {
            setDays([...days, e.target.name]);
        } else {
            let index = daysArray.indexOf(e.target.name);
            if (index > -1) {
                daysArray.splice(index, 1);
                this.setDays(daysArray);
            }
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        postHabit();
        document.getElementById('habitName').value = "";
        document.getElementById('habitDescription').value = "";
        document.getElementById('totalDays').value = "";
        document.getElementById('beginDate').value = "";
        document.getElementById('endDate').value = "";
    }

    function postHabit() {
        HabitAPI.createHabit({
            name: habitName.name,
            description: habitDescription.description,
            numberOfDays: numOfDays.numberOfDays,
            days: days,
            beginDate: beginDate.beginDate,
            endDate: endDate.endDate,
        })
            .then(res => console.log(res))
            .catch((err) => console.log(err.response));
        
        setTimeout(
            () => props.history.push("/habits"),
            3000
        );
    }

    return (
        <div className="container">
        <CreateHabitForm
            onNameChange = {handleNameInputChange}
            onDescriptionChange = {handleDescriptionInputChange}
            onNumOfDaysChange = {handleNumOfDaysInputChange}
            onBeginDateChange = {handleBeginDateInputChange}
            onEndDateChange = {handleEndDateInputChange}
            onDaysChange = {handleDaysInputChange}
            onSubmit = {handleFormSubmit}
        ></CreateHabitForm>
        </div>
    );
}

export default CreateHabit;