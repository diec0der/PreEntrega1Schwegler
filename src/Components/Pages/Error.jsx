import "./Pages.css";
function Error () { 
    return (
        <div className="page">
            <h1>Error 404</h1>
            <p className = "error-text">La página solicitada no existe o está en desarrollo</p>
            <i class="bi bi-cone-striped"></i>
        </div>
    )
}

export default Error;