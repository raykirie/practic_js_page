import {  useNavigate } from "react-router-dom"
import { ReactComponent as Notfound} from "../img/notfound.svg"

function NotFoundPage(){

    let navigate = useNavigate()

    return(
        <div className="not_found">
            <Notfound/>
            <button className="but" onClick={() => navigate('/product')}>К продуктам!</button>
        </div>
    )
}


export default NotFoundPage