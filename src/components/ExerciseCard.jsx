import { useState } from "react";

export default function ExerciseCard(props) {


    return (
        <div className="card col-sm-5 m-2 my-2">
            <div className="card-header row">
            <h5 className="card-title col-md-5">{props.exercise.date.getDate()}/{props.exercise.date.getMonth() +1}/{props.exercise.date.getFullYear()}</h5>
            <h5 className="card-title col-md-7">{props.exercise.exerciseName}</h5>
            </div>
            <div className="card-body">
                <div 
                className="row"
                style={{display: props.exercise.exerciseType === 'aerobic' ? "flex" : "none" }}>
                    <p className="card-text col-md-6">Time: {props.exercise.aerobic.timeDone} mins</p>
                    <p className="card-text col-md-6">Distance: {props.exercise.aerobic.distance} km</p>
                </div>
                <div 
                className="row"
                style={{display: props.exercise.exerciseType === 'anaerobic' ? "flex" : "none" }}>                  
                    <p className="card-text col-md-6">Number done: {props.exercise.anaerobic.numOfReps}</p>
                    <p className="card-text col-md-6">Reps: {props.exercise.anaerobic.numOfSets}</p>
                </div>
                <a href="#" className="btn btn-primary">Update</a>
            </div>
        </div>
 );

}