import {useEffect, useState} from "react";

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
                    return <p key={workout._id}>{workout.title}</p>
                })}
            </div>
        </div>
    )
}

export default Home;