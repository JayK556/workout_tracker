import { useEffect, useState } from "react"
import ExerciseCard from "./ExerciseCard";


export default function ExerciseDayList(props) {
    const [exerciseByDate, setExerciseByDate] = useState("");
    
    useEffect(() => {
        let exerciseDataArray = props.exerciseData;
        let newExerciseArray = [];
        while (exerciseDataArray.length  !== 0) {
            const newDate = exerciseDataArray[0].date;
            const filteredArray = exerciseDataArray.filter((exercise) => {
                return exercise.date.getTime() === newDate.getTime();
            });
            
            exerciseDataArray = exerciseDataArray.filter((exercise) => {
                return exercise.date.getTime() !== newDate.getTime();
            });
            newExerciseArray = [
                    ...newExerciseArray,
                    {
                        "date": newDate,
                        "data": filteredArray
                    }
                ];
        }
        newExerciseArray = newExerciseArray.sort((a, b) => {
            if (a.date < b.date) {
                return -1;
              }
              if (a.date > b.date) {
                return 1;
              }

              return 0;
        });
        setExerciseByDate(newExerciseArray.map((dayArray) => {
            return (
                <div className="container-fluid" key={dayArray.date.toString()}>
                    <h2>{dayArray.date.getDate()}/{dayArray.date.getMonth() +1}/{dayArray.date.getFullYear()}</h2>
                    {dayArray.data.map(data => (<ExerciseCard exercise={data} key={data.key} />))}
                </div>
            );
        }));
            
    }, [props.exerciseData])

    return (
        <div className="container-fluid">
            {exerciseByDate}
        </div>
    );
}