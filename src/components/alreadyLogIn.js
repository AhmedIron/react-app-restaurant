import { Navigate } from "react-router-dom";

const AlreadyLogIn = ({children}) => {

    const accessTokenObj = JSON.parse(localStorage.getItem("login"));
    if(!accessTokenObj){
        return <Navigate to="/login" />
    }

    return  children;
}

export default AlreadyLogIn