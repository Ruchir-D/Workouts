import { useState } from "react"


const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }
        if(response.ok) {
            setTitle("");
            setLoad('');
            setReps('');
            setError(null);
            console.log('New workout Added')
        }
    }

    return(
        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h3>Add a New Workout</h3>

            <label>Exercise Title</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
             />

             <label className="block text-gray-700 text-sm font-bold mb-2">How much Load</label>
             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             type="number" 
             onChange={(e) => setLoad(e.target.value)}
             value={load}
             />

             <label className="block text-gray-700 text-sm font-bold mb-2">Set the Reps</label>
                <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="number" 
                onChange={(e)=> setReps(e.target.value)}
                value={reps}
                />
             
             <button className="bg-blue-500 hover:bg-blue-700 mt-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Workout</button>
             {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm