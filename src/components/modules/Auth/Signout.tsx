import { Icon } from "@iconify/react/dist/iconify.js"
import { useDispatch } from "react-redux";
import { removeAuth } from "../../../store/authSlice";
import { Navigate } from "react-router-dom";

const Logout = () =>{ 
    const dispatch = useDispatch()
    const logoutAction = () => {
        dispatch(removeAuth())
        return <Navigate to={'/signin'} />
    }
    return <div className="cursor-pointer opacity-50 hover:opacity-100 flex gap-2 items-center" onClick={() => logoutAction()}>
        <span>Signout</span>
        <Icon icon={'tabler:logout'} width={24} />
    </div>
}

export default Logout;