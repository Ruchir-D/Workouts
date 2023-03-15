import {useEffect, useState } from 'react';

// Components
import WorkoutDetails from '../components/WorkoutDetails.js';
import WorkoutForm from '../components/WorkoutForm.js';

const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    useEffect(()=> {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const json = await response.json();

            if(response.ok) {
                setWorkouts(json)
            }
        }
        fetchWorkouts();
    }, [])
    return (
        <div className="home max-w-[1640px] mx-auto p-4 flex flex-row justify-around bg-[#F1DEC9]">
            <div className="w-3/4">
                <div className='workouts'>
                    {workouts && workouts.map((workout)=> (
                        <WorkoutDetails key={workout._id} workout = {workout} />
                    ))}
                </div>
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home