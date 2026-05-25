
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Components/Context/AuthContext.jsx/AuthContext';
import { useContext } from 'react';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <p> Loading</p>

    }
    if(user){
        return children
    }
    return (
        <Navigate state={location?.pathname} to={"/login"}>
        </Navigate>
    );
};

export default PrivateRouter;