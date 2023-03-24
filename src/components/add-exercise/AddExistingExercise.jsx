import { useEffect } from "react"


export default function AddExistingExercise(props) {

    function handleChange() {

    }

    return (
        <div className="fluid-container">
            <label className="form-label" htmlFor="exerciseTypeList" >Exercise</label>
             <select 
                className="form-select"
                name="exerciseTypeList"
                id="exerciseTypeList"
                required
                defaultValue={""}
                onChange={handleChange}   
            >
            {console.log(props.exerciseTypeList)}
                <option key="default" default disabled value="">Please choose an option</option>
                {props.exerciseTypeList && props.exerciseTypeList.map((exercise) => {
                   
                    return <option key={exercise._id} value={exercise._id}>{exercise.name}</option>
                })}
            </select> 
        </div>
    )
}