import { useEffect, useState } from "react";
import ExerciseInfo from "../template/ExerciseInfo";

            

export default function AddExercise() {
    const [formData, setFormData] = useState(ExerciseInfo());

    function handleChange(event) {
        const value = event.target.value;
        setFormData(() => {
            let key = event.target.name;
            let newObj;
            if(key === "timeDone" || key === "distance") {
                newObj = {
                    ...formData,
                    aerobic: {
                        ...formData.aerobic,
                        [key]:value
                    }
                };
            } else if (key === "numOfReps" || key === "numOfSets") {
                newObj = {
                    ...formData,
                    anaerobic: {
                        ...formData.anaerobic,
                        [key]:value
                    }
                };
            } else { 
                newObj = {
                    ...formData,
                    [key]:value
                };
            }
            return newObj;          
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        fetch("/api/tracker", {
            method: "POST",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
      .then((res) =>  res.json())
      .then((data) => console.log(data.message));
    }

    return (
        <form className="container-fluid mb-3 pt-4 w-75" onSubmit={handleSubmit}>
            <h2>Enter a new exercise</h2>
            <label className="form-label" htmlFor="date" >Date</label>
            <input 
                className="form-control w-25" 
                name="date" 
                id="date"
                required
                type="date"
                value={formData.date}
                onChange={handleChange}
            />
            <label className="form-label" htmlFor="exerciseName">Exercise</label>
            <input
                className="form-control" 
                name="exerciseName" 
                id="exerciseName"
                required
                value={formData.exerciseName}
                onChange={handleChange}
            />
            <label className="form-label" htmlFor="exerciseType" >Type of Exercise</label>
             <select 
                className="form-select"
                name="exerciseType"
                id="exerciseType"
                required
                defaultValue={formData.exerciseType}
                onChange={handleChange}   
            >
                <option value="" disabled>Please choose...</option>
                <option value="aerobic">Aerobic</option>
                <option value="anaerobic">Anaerobic</option>
            </select> 
            <div className="row" style={{display: formData.exerciseType === 'aerobic' ? "flex" : "none" }}>
                <div className="col">
                    <label className="form-label" htmlFor="distance">Distance</label>
                    <input 
                        className="form-control" 
                        name="distance" 
                        id="distance" 
                        type="number"
                        value={formData.aerobic.distance}
                        onChange={handleChange}                 
                    />
                </div>
                <div className="col">
                    <label className="form-label" htmlFor="timeDone">Time (mins)</label>
                    <input 
                        className="form-control" 
                        name="timeDone" 
                        id="timeDone" 
                        type="number"
                        value={formData.aerobic.timeDone}
                        onChange={handleChange}                 
                    />
                </div>
            </div>
            <div className="row" style={{display: formData.exerciseType === 'anaerobic' ? "flex" : "none" }}>
                <div className="col">
                    <label className="form-label" htmlFor="numOfReps">Number of Reps</label>
                    <input 
                        className="form-control" 
                        name="numOfReps" 
                        id="numOfReps" 
                        type="number"
                        value={formData.anaerobic.numOfReps}
                        onChange={handleChange}
                    />
                </div>
                <div className="col">
                    <label className="form-label" htmlFor="numOfSets">Number of Sets</label>
                    <input 
                        className="form-control" 
                        name="numOfSets" id="numOfSets" 
                        type="number"
                        value={formData.anaerobic.numOfSets}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button className="btn btn-primary w-25 mt-3" type="submit">Add workout</button>
        </form>
    );
}