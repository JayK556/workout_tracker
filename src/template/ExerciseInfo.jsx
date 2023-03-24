
export function ExerciseInfo(date, exerciseName, exerciseType, distance, timeDone, numOfReps, numOfSets, key) {
    return (
        {
            key: key || "",
            date: new Date(date) || new Date(),
            exerciseName: exerciseName || "",
            exerciseType: exerciseType || "",
            aerobic: {
                timeDone: timeDone || "",
                distance: distance || ""
            },
            anaerobic: {
                numOfReps: numOfReps || "",
                numOfSets: numOfSets || ""
            }            
        }
    );
}

// export function ExerciseInfo2(name, fields, distance, numOfReps, numOfSets) {

//     return ({
//         name: name,
//         field: Array.isArray(fields) ? [...fields] : null
//         // distance: distance || "",
//         // numOfReps: numOfReps || "",
//         // numOfSets: numOfSets || ""
//     });
// }

export function ExerciseInfo2(name, type, descr, fields) {

    return ({
        name: name || "",
        type: type || "",
        description: descr || "",
        fields: Array.isArray(fields) ? [...fields] : []
    });
}

export function WorkoutInfo(user, date, timeDone, exercises) {

    return ({
        user: user,
        date: date,
        timeDone: timeDone || "",
        exerciseList: Array.isArray(exercises) ? [...exercises] : []
    });
}