import React from 'react';
import './addTask.css';


const AddTaskForm = (props) => {
  return (
      <div>
          <form>
              <div className="form-group">
                  <label>Task text field</label>
                  <input type="text" className="form-control" placeholder="Enter your task" onChange={props.get}/>
                  <button type="button" className="btn btn-success" onClick={props.click}>Add task to Task list</button>
              </div>
          </form>
      </div>
  )
};

export default AddTaskForm;