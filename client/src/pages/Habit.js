import React, {useState, useEffect, useContext} from "react";
import HabitAPI from "../utils/HabitAPI";
import HabitInfo from "../components/HabitInfo";
import { useParams } from "react-router-dom";


function Habit() {
    const {id} = useParams();
    const [habit, setHabit] = useState({});
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
        setDaysRemaining(diffInDays)
    }

    return (
        <HabitInfo
            habit = {habit}
            daysRemaining = {daysRemaining}
        ></HabitInfo>
    );
}

export default Habit;