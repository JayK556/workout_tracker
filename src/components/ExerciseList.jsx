import { useState, useEffect } from "react";
import ExerciseCard from "./ExerciseCard";
import ExerciseInfo from "../template/ExerciseInfo";

export default function ExerciseList(props) {
    const [cards, setCards] = useState();

    useEffect(() => {
        // fetch("/api/tracker")
        // .then((res) =>  res.json())
        // .then((data) => {
        //     let newExercises = [];
        //     // newExercises = [...exercises];
        //     data.forEach(item => {  
        //         const newItem = ExerciseInfo(
        //             new Date(item.date),
        //             item.exerciseName,
        //             item.exerciseType,
        //             item.aerobic.distance,
        //             item.aerobic.timeDone,
        //             item.anaerobic.numOfReps,
        //             item.anaerobic.numOfSets,
        //             item._id
        //         );
        //         newExercises = [
        //             ...newExercises,
        //             newItem
        //         ];
        //     });
        setCards(props.exerciseData.map(exercise => (
            <ExerciseCard exercise={exercise} key={exercise.key}/>
        )));
        // });
    }, [props.exerciseData]);

    return (
        <div className="container-fluid row pt-4 mx-auto">
            {cards}
        </div>
    );
}