import { useEffect, useState } from "react";
import AddExercise from "./AddExercise";
import ExerciseList from "./ExerciseList"
import ExerciseInfo from "../template/ExerciseInfo";
import ExerciseDayList from "./ExerciseDayList";


export default function Tracker() {
    const [exerciseData, setExerciseData] = useState();

    useEffect(() => {
        fetch("/api/tracker")
        .then((res) =>  res.json())
        .then((data) => {
            let newExercises = [];
            data.forEach(item => {  
                const newItem = ExerciseInfo(
                    new Date(item.date),
                    item.exerciseName,
                    item.exerciseType,
                    item.aerobic.distance,
                    item.aerobic.timeDone,
                    item.anaerobic.numOfReps,
                    item.anaerobic.numOfSets,
                    item._id
                );
                newExercises = [
                    ...newExercises,
                    newItem
                ];
            });
            setExerciseData(newExercises);
        })
    }, []);
    
    return (
        <div className="tracker">
            {exerciseData && <ExerciseDayList exerciseData={exerciseData}/>}
            {exerciseData && <ExerciseList exerciseData={exerciseData}/>}
            <AddExercise />
        </div>
    );
}