import { useEffect } from "react";
import AddExistingExercise from "./AddExistingExercise";
import AddNewExercise from "./AddNewExercise";

export default function AddExercise(props) {

    function handleChange(event) {
        let value;
        const name = event.target.name.substring(0, event.target.name.length-1);

        if (event.target.value === "true") {
            value = true;
        } else if (event.target.value === "false") {
            value = false;
        }

        // console.log(props.formData);
        // console.log(`name: ${name}
        // value: ${value}`);
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

    useEffect(() => {
        if (props.formData.exerciseList === undefined) {
            props.setFormData(prevData => {
                let initialData = {
                        ...prevData,
                        exerciseList : [ 
                            {
                                isNew: false,
                                name: "",
                                type: "",
                                description: "",
                                fields: []
                            }
                        ]
                    };
                    return initialData;
                });
        }else if (props.formData.exerciseList[props.idx] === undefined) {
            props.setFormData(prevData => {
                let initialData =  {
                    ...prevData,
                    exerciseList : [
                        ...prevData.exerciseList.slice(0, props.idx), 
                        {
                            isNew: false,
                            name: "",
                            type: "",
                            description: "",
                            fields: []
                        }, 
                        ...prevData.exerciseList.slice(props.idx+1)
                    ]
                };
                return initialData;
            });
        }      
    }, [props]);

    return (
        <div className="fluid-container my-2">
            <input
                className="form-check-input mx-2"
                name={"isNew" + props.idx}
                id="isNewOpt1"
                type="radio"
                defaultChecked="true"
                value={false}
                    onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="isNewOpt1">Existing exercise</label>
            <input
                className="form-check-input mx-2"
                name={"isNew" + props.idx}
                id="isNewOpt2"
                type="radio"
                value={true}
                    onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="isNewOpt2">New exercise</label>
            {props.formData?.exerciseList[props.idx]?.isNew ? <AddNewExercise key={props.idx} idx={props.idx} handleChange={props.handleChange} formData={props.formData} setFormData={props.setFormData} />: <AddExistingExercise exerciseTypeList={props.exerciseTypeList}/>}
        </div>
        
    );
}