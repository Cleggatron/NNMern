import {useEffect, useState} from "react";

//components
import WorkoutDetails from "../components/WorkoutDetails";

function Home(){

    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts");
            const resJson = await response.json();

            if(response.ok){
                setWorkouts(resJson);
            }
        }

        fetchWorkouts()
    }, [])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => {
                    return <WorkoutDetails key={workout._id} workout={workout}/>
                })}
            </div>
        </div>
    )
}

export default Home;