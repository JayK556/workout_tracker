

export default function AddNewField(props) {

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name.substring(0, event.target.name.length-1);

        props.setFormData(prevData => {
            let fieldsObj;

            if (prevData.exerciseList[props.exerciseId].fields.findIndex((element, index) => index === props.idx) !== -1){
                fieldsObj = prevData.exerciseList[props.exerciseId].fields.map((field, index) => {
                    if (index === props.idx) {
                        return {
                            ...prevData.exerciseList[props.exerciseId].fields[index],
                            [name] : value
                        };
                    }
                    return field;
                });
            } else {
                fieldsObj = [...prevData.exerciseList[props.exerciseId].fields,
                {[name] : value}];
            }

            return {
                ...prevData,
                exerciseList : [
                    ...prevData.exerciseList.slice(0, props.exerciseId), 
                    {
                        ...prevData.exerciseList[props.exerciseId],
                        fields : fieldsObj
                    },
                    ...prevData.exerciseList.slice(props.exerciseId + 1)   
                ]
            };
        });
    }
    
    return (<div className="row">
        <div className="col-2">
            <label className="form-label" htmlFor={"field" + props.idx}>Field name: </label>
        </div>
        <div className="col-4">
            <input 
                className="form-control" 
                name={"field" + props.idx}
                id={"field" + props.idx}
                value={props.formData?.fields[props.idx]?.field}
                onChange={handleChange}
            />
        </div>
        <div className="col-2">
            <label className="form-label" htmlFor={"value" + props.idx}>Field value: </label>
        </div>
        <div className="col-4">
            <input 
                className="form-control" 
                name={"value" + props.idx} 
                id={"value" + props.idx}
                value={props.formData?.fields[props.idx]?.value}
                onChange={handleChange}
            />
        </div>
    </div>);
}