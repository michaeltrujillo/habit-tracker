import React, {useState, useEffect, useContext} from "react";
import HabitAPI from "../utils/HabitAPI";
import { AuthContext } from "../Context/AuthContext";
import CurrentHabits from "../components/CurrentHabits";
import CompletedHabits from "../components/CompletedHabits";

function AllHabits() {
    const {id} = useContext(AuthContext);
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        loadHabits()
    }, []);

    function loadHabits() {
        HabitAPI.getUserHabits()
        .then(res => {
            setHabits(res.data.habits);
        })
        .catch((err) => console.log(err.response));
    }

    return (
        <div>
            <CurrentHabits
                habits = {habits}
                loadHabits = {() => loadHabits()}
            ></CurrentHabits>
            <br/><br/>
            <CompletedHabits
            ></CompletedHabits>
        </div>
    );
}

export default AllHabits;