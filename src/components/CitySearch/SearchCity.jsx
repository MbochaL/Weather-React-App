import React, { useState } from "react";

const SearchCity = ({newLocation}) => {

    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if(city === "" || !city) return;

        newLocation(city);
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-5 mt-5 mx-auto">
                    <input type="text" className="form-control" placeholder="City" onChange={(e) =>setCity(e.target.value)}/>
                    <button className="btn btn-primary input-group-text" type="submit">Search City</button>
                </div>
            </form>
        </div> 
        )
}

export default SearchCity;