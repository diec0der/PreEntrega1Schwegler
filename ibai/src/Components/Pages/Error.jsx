import { BiErrorAlt } from "react-icons/bi";

function Error () { 
    return (
        <div>
            <h1>Error 404</h1>
            <p>La página solicitada no existe o está en desarrollo</p>
            <BiErrorAlt size={100} />
        </div>
    )
}

export default Error;