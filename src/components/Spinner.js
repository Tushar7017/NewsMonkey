import React from 'react'
import loader from '../images/loader.gif';

const Spinner = () => {
    return (
        <div
            className="text-center"
            style={{
                display: "flex",
                justifyContent: "center",
                height: "75vh",
                bottom: "0"
            }}>
            <img
                className=""
                src={loader}
                alt="loading News"
                height="100px"
            />
        </div>
    )
}

export default Spinner;