import { useEffect, useState } from "react";
import { WorkoutInfo, ExerciseInfo2 } from "../../template/ExerciseInfo";
import AddExercise from "./AddExercise";



export default function AddWorkout(props) {
    
    const [formData, setFormData] = useState(WorkoutInfo("", new Date()));
    
    const [exerciseCount, setExerciseCount] = useState(0);
    const [exerciseList, setExerciseList] = useState([<AddExercise key={exerciseCount} idx={exerciseCount} handleChange={handleChange} formData={formData} setFormData={setFormData} exerciseTypeList={props.exerciseTypeList}/>]);
    
    

    useEffect(()=> {
        setExerciseList(prevData => {
            //console.log(prevData);
            let newData = [];
            for (let data of prevData) {
                newData = [
                    ...newData,
                    {
                        ...data,
                        props: {
                            ...data.props,
                            formData: formData
                        }
                    }
                ]
            }
            //console.log(newData);
            return newData;
        });
    }, [formData]);

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        
        setFormData((prevData) => {
            return {
                ...formData,
                [name] : value
            };
        
        //     let newObj;
        //     const tempName = name.substring(0, name.length-1);
        //     if (Array.isArray(name.match(/name/))|| Array.isArray(name.match(/type/)) || Array.isArray(name.match(/isNew/)) || Array.isArray(name.match(/description/))) {
        //         const exerciseId = Number(name.substring(name.length-1, name.length));
        //         console.log(`name: ${tempName}, id: ${exerciseId}`)   
        //         newObj = {
        //             ...prevData,
        //             exerciseList : [
        //                 ...prevData.exerciseList.slice(0, exerciseId), 
        //                 {
        //                     ...prevData.exerciseList[exerciseId],
        //                     [tempName] : value
        //                 }, 
        //                 ...prevData.exerciseList.slice(exerciseId+1)
        //             ]
        //         };
        //     } else if (Array.isArray(name.match(/field/)) || Array.isArray(name.match(/value/))) {
        //         const exerciseName = event.target.parentNode.parentNode.parentNode.previousSibling.name;
        //         const exerciseId = Number(exerciseName.substring(exerciseName.length-1, exerciseName.length));
        //         const fieldId = Number(name.substring(name.length-1, name.length));        
                
        //         let fieldsObj;

        //         if (prevData.exerciseList.findIndex((element, index) => index === exerciseId) !== -1){
        //             if(prevData.exerciseList[exerciseId].fields !== undefined) {
        //                 if (prevData.exerciseList[exerciseId].fields.findIndex((element, index) => index === fieldId) !== -1){
        //                     fieldsObj = prevData.exerciseList[exerciseId].fields.map((field, idx) => {
        //                         if (idx === Number(fieldId)) {
        //                             return {
        //                                 ...prevData.exerciseList[exerciseId].fields[fieldId],
        //                                 [tempName] : value
        //                             };
        //                         }
        //                         return field;
        //                     });
        //                 } else {
        //                     fieldsObj = [...prevData.exerciseList[exerciseId].fields,
        //                     {[tempName] : value}];
        //                 }
        //             } else {
        //                 fieldsObj = [{[tempName] : value}];
        //             }   
        //         } else {
        //             fieldsObj = [{[tempName] : value}];
        //         }

        //         newObj = {
        //             ...prevData,
        //             exerciseList : [
        //                 ...prevData.exerciseList.slice(0, exerciseId), 
        //                 {
        //                     ...prevData.exerciseList[exerciseId],
        //                     fields : fieldsObj
        //                 },
        //                 ...prevData.exerciseList.slice(exerciseId + 1)   
        //             ]
        //         };
        //     } else {
        //         newObj = {
        //             ...formData,
        //             [name] : value
        //         };
        //     }
        //     console.log(newObj);
        //     return newObj;
        }); 
    }

    function addExercise() {
        let count = exerciseCount;
        count++;
        setExerciseCount(count);
        setExerciseList(prev => [...prev, <AddExercise key={count} idx={count} handleChange={handleChange} formData={formData} setFormData={setFormData} exerciseTypeList={props.exerciseTypeList} />]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/api/workout", {
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
        <form className="container-fluid py-4 w-75" onSubmit={handleSubmit}>
            <h2>Enter your workout</h2>
            <div className="row my-4">
                <div className="col-5">
                    <label className="form-label" htmlFor="date" >Date: </label>
                    <input 
                        className="form-control w-75 mx-2 d-inline-block" 
                        name="date" 
                        id="date"
                        required
                        type="date"
                        value={formData?.date}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-7">
                    <label className="form-label" htmlFor="timeDone" >Time Taken: </label>
                    <input 
                        className="form-control w-25 mx-2 d-inline-block" 
                        name="timeDone" 
                        id="timeDone"
                        required
                        type="number"
                        value={formData?.timeDone}
                        onChange={handleChange}
                    />
                    <p className="d-inline-block">minute/s</p>
                </div>
            </div>
            
            
            {exerciseList}
            <button className="btn mt-3" onClick={addExercise} type="button">Add Exercise</button>
            <button className="btn mt-3" type="submit">Add Workout</button>

        </form>
    );
}