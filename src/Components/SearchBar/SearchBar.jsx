import { useState } from "react";

function SearchBar ({enSubmit}) {
    const [term, setTerm] = useState("");

    function handleForSubmit (event) {
        event.preventDefault();
        enSubmit(term);
    }

    function handleChange (event) {
        setTerm(event.target.value);
    }

    return (
        <>
            <form className="d-flex search-form" role="search" onSubmit={handleForSubmit}>
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Buscar productos..." 
                    aria-label="Search" 
                    value={term} 
                    onChange={handleChange}
                />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </>
    );
}

export default SearchBar;