import React from "react";

const SuccessComponent = ({ success }) => {

    return (
        <div>
            <div className="alert alert-success" role="alert">
                <h5>{success}</h5>
            </div>
        </div>
    )
}

export default SuccessComponent;