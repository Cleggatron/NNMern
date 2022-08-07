import { useState } from "react";

function WorkoutForm() {

    const [title, setTitle] = useState("");
    const [load, setLoad] = useState("");
    const [reps, setReps] = useState("");
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = {title, load, reps}

        const response = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
        }

        if(response.ok){
            setError(null);
            console.log("New workout added \n", json);
            setTitle("");
            setLoad("");
            setReps("");
        }
    }

    return (
        <form className="create" on onSubmit={handleSubmit}>
            <h3>Add a new workout</h3>
            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title} 
            />

            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load} 
            />

            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps} 
            />

            <button>Submit</button>

            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;