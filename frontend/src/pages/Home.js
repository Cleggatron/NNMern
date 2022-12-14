import {useEffect} from "react";
import {useWorkoutContext} from "../hooks/useWorkoutsContext"

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

function Home(){

    const {workouts, dispatch} = useWorkoutContext();
    

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch("/api/workouts");
            const resJson = await response.json();

            if(response.ok){
                dispatch({type: "SET_WORKOUTS", payload: resJson})
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
            <WorkoutForm/>
        </div>
    )
}

export default Home;