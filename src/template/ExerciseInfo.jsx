
export default function ExerciseInfo(date, exerciseName, exerciseType, distance, timeDone, numOfReps, numOfSets, key) {
    return (
        {
            key: key || "",
            date: new Date(date) || new Date(),
            exerciseName: exerciseName || "",
            exerciseType: exerciseType || "",
            aerobic: {
                distance: distance || "",
                timeDone: timeDone || ""
            },
            anaerobic: {
                numOfReps: numOfReps || "",
                numOfSets: numOfSets || ""
            }            
        }
    );
}