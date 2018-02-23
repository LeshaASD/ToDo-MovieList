import React from 'react';
import './task.css';

const Task = (props) => {
    return (
        <div className="list-group">
            <a href="#" className={'list-group-item list-group-item-action flex-column align-items-start' + ' ' + props.checked}>
                <div className="d-flex w-100 justify-content-between">
                    <small><button className="delete-btn" onClick={props.remove}>delete</button></small>
                </div>
                <p className="mb-1">{props.name}</p>
                <div className="form-check">
                    <input className={'form-check-input '} value='' type="checkbox" checked={props.checked} id="defaultCheck1" onClick={props.done}/>
                        <label className="form-check-label">
                            Task done
                        </label>
                </div>
            </a>
        </div>
    )
};

export default Task;
