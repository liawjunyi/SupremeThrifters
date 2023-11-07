import React from "react";

export default function Modal({visible, onClose}) {

    const handleOnClose = (e) => {
        if (e.target.id === "modal") onClose()
    };

    if (!visible) return null;

    return (
        <div 
            id="modal"
            onClick={handleOnClose} 
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
            flex justify-center items-center"
        >
            <div className="bg-white p-2 rounded">
                <p>Add in whatever UN Goals</p>
            </div>
        </div>
    );
}