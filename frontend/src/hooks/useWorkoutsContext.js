import { WorkoutContext } from "../context/WorkoutContext";
import {useContext} from "react";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext);

    if(!context){
        throw Error("useWorkOutContext must be used inside a context provider")
    }

    return context;
}