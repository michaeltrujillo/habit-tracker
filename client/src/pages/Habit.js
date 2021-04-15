import React, {useState, useEffect, useContext} from "react";
import HabitAPI from "../utils/HabitAPI";
import NoteAPI from "../utils/NoteAPI";
import HabitInfo from "../components/HabitInfo";
import AddNoteForm from "../components/AddNoteForm";
import HabitButtons from "../components/HabitButtons";
import Notes from "../components/Notes";
import { useParams } from "react-router-dom";


function Habit() {
    const {id} = useParams();
    const [habit, setHabit] = useState({});
    // const [addNoteBoolean, setAddNoteBoolean] = useState(false);
    const [noteDate, setNoteDate] = useState({});
    const [noteDescription, setNoteDescription] = useState({});
    const [daysRemaining, setDaysRemaining] = useState(0);

    useEffect(() => {
        loadHabit();
    }, []);

    function loadHabit() {
        HabitAPI.getHabit(id)
        .then(res => {
            setHabit(res.data);
            getDaysRemaining(res.data);
        })
        .catch((err) => console.log(err.response));
    }

    function getDaysRemaining(data) {
        let currentDate = new Date();
        let dateEnds = new Date(data.endDate);
        let diffInMil = dateEnds - currentDate;
        const diffInDays = Math.floor(diffInMil / (1000 * 60 * 60 * 24)) + 1;
        setDaysRemaining(diffInDays);
    }

    // function loadNotes() {
    //     NoteAPI.getNote(id)
    //     .then(res => {
    //         setHabit(res.data);
    //         getDaysRemaining(res.data);
    //     })
    //     .catch((err) => console.log(err.response));
    // }

    function handleNoteDateInputChange(e) {
        setNoteDate({[e.target.name]: e.target.value});
    }

    function handleNoteDescriptionInputChange(e) {
        setNoteDescription({[e.target.name]: e.target.value});
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        postNote();
        document.getElementById('noteDate').value = "";
        document.getElementById('newNoteContent').value = "";
    }

    function postNote() {
        NoteAPI.createNote({
            description: noteDescription.description,
            date: noteDate.date,
            habitID: id
        })
            .then(res => console.log(res))
            .catch((err) => console.log(err.response));
    }

    // This function will hide/unhide the add note form.
    // function addNote() {

    // }

    return (
        <div className="container">
        <HabitInfo
            habit = {habit}
            daysRemaining = {daysRemaining}
        ></HabitInfo>
        <HabitButtons></HabitButtons>
        {/* {addNoteBoolean ? ( */}
        <AddNoteForm
            onNoteDateChange = {handleNoteDateInputChange}
            onNoteDescriptionChange = {handleNoteDescriptionInputChange}
            onSubmit = {handleFormSubmit}
        ></AddNoteForm>
        {/* ) : null} */}
        <Notes></Notes>
        </div>
    );
}

export default Habit;