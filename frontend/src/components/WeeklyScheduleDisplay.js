import React,{useState} from 'react';
import DownArrowImg from "./../images/Down-Arrow.png"

function WeeklyScheduleDisplay() {
    const [editMode,setEditMode] = useState(false)
    let weeklySchedule=[
        {day:"Sunday",muscle:"Rest"},
        {day:"Monday",muscle:"Chest"},
        {day:"Tuesday",muscle:"Back"},
        {day:"Wednesday",muscle:"Shoulders"},
        {day:"Thursday",muscle:"Biceps"},
        {day:"Friday",muscle:"Triceps"},
        {day:"Saturday",muscle:"Legs"}]
    const weeklyScheduleComponent = weeklySchedule.map((row)=>
        <div className='row border m-2'>
        <span className='col text-left'>{row['day']}</span>
        <span className='col text-center'>{row['muscle']}</span>
        </div>
    )
    const editScheduleComponent = weeklySchedule.map((row)=>
        <div className='row border m-2'>
            <span className='col-5 text-left'>{row['day']}</span>
            <span className='col-5 justify-end'>
                {row['muscle']}
            </span>
            <img src={DownArrowImg} width="10px" height="12px" className='col-2 text-right'/>
        </div>
    )
    const exerciseList = ["Exercise-1","Exercise-2","Exercise-3","Exercise-4","Exercise-5"]
    const exerciseListContainer = exerciseList.map((exercise)=><div className="row m-2 border">{exercise}</div>)
  if (editMode===false){
    // Display Only Weekly Schedule
  return (
    <>
    <span className='fs-4 m-2'>Weekly Schedule</span>
    <div className='container border-dark'>
        {weeklyScheduleComponent}
    </div>
    <select className='mt-3 mx-2 fs-8 d-block border-primary rounded'>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
    </select>
    <span className="ms-2 mb-3 lead text-primary">Target Muscle</span>
    <div className='container'>
        {exerciseListContainer}
        <div className='row justify-content-center'><button className='col-3 btn btn-primary' onClick={()=>setEditMode(true)}>Edit</button></div>
    </div>
    </>
  )}
  else{
    // Editing Weekly Schedule
    return(
        <>
        <span className='fs-4 m-2'>Weekly Schedule</span>
        <div className='container border-dark'>
        {editScheduleComponent}
        </div>
        <div className='container'>
        {/* {exerciseListContainer} */}
        <div className='row justify-content-center'><button className='col-3 btn btn-primary' onClick={()=>setEditMode(false)}>Save</button></div>
        </div>
        </>
    )
  }
}

export default WeeklyScheduleDisplay