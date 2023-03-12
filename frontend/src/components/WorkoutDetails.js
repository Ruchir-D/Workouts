
const WorkoutDetails = ({workout}) => {
    return (
        <div className="bg-white p-4 rounded-lg drop-shadow-lg">
            <h4 className="text-2xl all uppercase ">{workout.title}</h4>
            <p className="text-xl"><b>Load (KG): </b>{workout.load}</p>
            <p className="text-xl"><b>Reps: </b>{workout.reps}</p>
            
        </div>
    )
}

export default WorkoutDetails