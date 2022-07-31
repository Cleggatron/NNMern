import {useEffect, useState} from "react";

function Home(){

    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("http://localhost:3000/api/workouts");
            const json = await response.json();

            if(response.ok){
                setWorkouts(json);
            }
        }

        fetchWorkouts();
    }, [])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => {
                    <p key={workout.id}>{workout.title}</p>
                })}
            </div>
        </div>
    )
}

export default Home;