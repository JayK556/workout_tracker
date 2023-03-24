import { useEffect, useState } from "react"
import AddNewField from "./AddNewField";

export default function AddNewExercise(props) {

    const [numOfFields, setNumOfFields] = useState(0);
    const [newFieldList, setNewFieldList] = useState([<AddNewField key={numOfFields} idx={numOfFields} exerciseId={props.idx} formData={props.formData?.exerciseList[props.idx]} handleChange={props.handleChange} setFormData={props.setFormData}/>])


    function addFields() {
        let count = numOfFields;
        count++;
        setNumOfFields(count);
        setNewFieldList(prev => [...prev, <AddNewField key={count} idx={count} exerciseId={props.idx} formData={props.formData?.exerciseList[props.idx]} handleChange={props.handleChange} setFormData={props.setFormData}/>]);
    };

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name.substring(0, event.target.name.length-1);

        props.setFormData(prevData => ({
            ...prevData,
            exerciseList : [
                ...prevData.exerciseList.slice(0, props.idx), 
                {
                    ...prevData.exerciseList[props.idx],
                    [name] : value
                }, 
                ...prevData.exerciseList.slice(props.idx+1)
            ]
        }));
    }

    // useEffect(() => {
        
    //     props.setFormData(prevData => {
    //         let initialData = []
    //         if (prevData?.exerciseList === undefined) {
    //             initialData = {
    //                 ...prevData,
    //                 exerciseList : [ 
    //                     {
    //                         name: "",
    //                         type: "",
    //                         description: "",
    //                         fields: []
    //                     }
    //                 ]
    //             };
    //         } else {
    //             initialData = {
    //                 ...prevData,
    //                 exerciseList : [
    //                     ...prevData.exerciseList.slice(0, props.idx), 
    //                     {
    //                         ...prevData.exerciseList[props.idx],
    //                         name: "",
    //                         type: "",
    //                         description: "",
    //                         fields: []
    //                     }, 
    //                     ...prevData.exerciseList.slice(props.idx+1)
    //                 ]
    //             };
    //         }
    //         return initialData;
    //     })
    // }, [props]);

    return (
        <div className="fluid-container my-2">
            <label className="form-label" htmlFor={"name" + props.idx}>Name: </label>
            <input 
                className="form-control" 
                name={"name" + props.idx}
                id={"name" + props.idx}
                required
                value={props.formData?.exerciseList[props.idx]?.name}
                onChange={handleChange}
            />
            <label className="form-label" htmlFor={"type" + props.idx}>Type of Exercise</label>
            <select 
                className="form-select"
                name={"type" + props.idx}
                id={"type" + props.idx}
                required
                defaultValue={props.formData?.exerciseList[props.idx]?.type}
                onChange={handleChange} 
            >
                <option value="" disabled>Please choose...</option>
                <option value="aerobic">Aerobic</option>
                <option value="anaerobic">Anaerobic</option>
            </select> 
            <label className="form-label" htmlFor={"description" + props.idx}>Description</label>
            <textarea
                className="form-control" 
                name={"description" + props.idx}
                id={"description" + props.idx}
                required
                style={{resize:"none"}}
                value={props.formData?.exerciseList[props.idx]?.description}
                onChange={handleChange}
            />
            <div>
                <h5>Additional Information</h5>
                {newFieldList}
                <button className="btn" onClick={addFields} type="button">+</button>
            </div>

        </div>
    )
}