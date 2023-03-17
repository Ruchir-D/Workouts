
const WorkoutDetails = ({workout}) => {
    return (
        <div className="bg-white p-4 rounded-sm drop-shadow-lg m-4">
            <h4 className="text-2xl font-bold all uppercase text-rose-700 ">{workout.title}</h4>
            <p className="text-xl"><b>Load (KG): </b>{workout.load}</p>
            <p className="text-xl"><b>Reps: </b>{workout.reps}</p>
            
        </div>
    )
}

export default WorkoutDetails