import { useEffect, useState } from "react";
import AddExercise from "./AddExercise";
import ExerciseList from "./ExerciseList"
import { ExerciseInfo } from "../template/ExerciseInfo";
import ExerciseDayList from "./ExerciseDayList";
import AddWorkout from "./add-exercise/AddWorkout";


export default function Tracker() {
    const [exerciseData, setExerciseData] = useState();
    const [exerciseTypeList, setExerciseTypeList] = useState();

    useEffect(() => {
        fetch("/api/tracker")
        .then((res) =>  res.json())
        .then((data) => {
            let newExercises = [];
            data.forEach(item => {  
                // const newItem = ExerciseInfo(
                //     new Date(item.date),
                //     item.exerciseName,
                //     item.exerciseType,
                //     item.aerobic.distance,
                //     item.aerobic.timeDone,
                //     item.anaerobic.numOfReps,
                //     item.anaerobic.numOfSets,
                //     item._id
                // );
                // newExercises = [
                //     ...newExercises,
                //     newItem
                // ];
            });
            setExerciseData(newExercises);
        })

        fetch("/api/workout")
        .then((res) =>  res.json())
        .then((data) => {
            setExerciseTypeList(data);
        });   


    }, []);
    
    return (
        <div className="tracker">
            <div className="container-fluid text-center">
                <button className="btn btn-primary w-25 mt-3">Add Workout</button>
            </div>
            {exerciseTypeList && <AddWorkout exerciseTypeList={exerciseTypeList} />}
            <AddExercise />
                {exerciseData && <ExerciseDayList exerciseData={exerciseData}/>}
                {exerciseData && <ExerciseList exerciseData={exerciseData}/>}
                
        </div>
    );
}