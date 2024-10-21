import React, { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables">
            <h2>Array State Variable</h2>
            <button className="btn btn-success mb-2" onClick={addElement}>Add Element</button>
            <ul className="list-group-item border rounded">
                {array.map((item, index) => (
                <li className="list-group-item border-top pt-3 pb-3" key={index}>
                    <div className="d-flex flex-row justify-content-between align-items-center pe-3 ps-3">
                        <h4><b>{item}</b></h4>
                        <button className="float-end btn btn-danger" onClick={() => deleteElement(index)}
                                id="wd-delete-element-click">
                            Delete
                        </button>
                    </div>
                </li>
                ))}
            </ul>
            <hr/>
        </div>
    );
}
