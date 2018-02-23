import React, { Component } from 'react';
import './toDo.css';
import AddTaskForm from '../../components/toDo/add_task_component/addTask';
import Task from '../../components/toDo/task-component/task';
import axios from 'axios';
import Spinner from "../../components/UI/Spinner/Spinner";

class App extends Component {
   state = {
       tasks: [],
       currentTask: '',
       loading: false
   };

   componentDidMount() {
       this.setState({loading: true});

       axios.get('toDo.json').then(response => {
           const newResponse = [];
           for (let key in response.data) {
               newResponse.push({...response.data[key], id: key});
           }

           this.setState({tasks: newResponse});
       }).finally(() => {
           this.setState({loading: false});
       })
   }

   getTaskValue = (event) => {
       let currentTask = event.target.value;
       let tasks = {...this.state};
       tasks.currentTask = currentTask;

       this.setState(tasks);
   };

   _makePostRequest = (obj) => {
       obj.done = false;
       return axios.post('toDo.json', obj).then(response => {
           obj.id = response.data.name;
           return obj;
       })
   };

   _makePutRequest = (id, obj) => {
       return axios.put(`toDo/${id}.json`, obj);
   };

   _makeDelRequest = id => {
      return axios.delete(`toDo/${id}.json`);
   };

   addNewTask = () => {
       if (this.state.currentTask) {
           let loading = this.state.loading;
           this.setState({loading: !loading});

           let newTaskObj = {};
           newTaskObj.task = this.state.currentTask;
           const tasks = [...this.state.tasks];
           const newState = {...this.state};
           this._makePostRequest(newTaskObj).then(response => {
               tasks.push(response);
               newState.tasks = tasks;
               newState.loading = false;

               this.setState(newState);
           });
       }
   };

   removeTask = (id) => {
       const index = this.state.tasks.findIndex(t => t.id === id);
       const tasks = [...this.state.tasks];
       tasks.splice(index, 1);
       const currentTask = this.state.currentTask;
       this._makeDelRequest(id);
       this.setState({tasks, currentTask, loading: false});
   };

   addClassToTask = (id) => {
       const index = this.state.tasks.findIndex(t => t.id === id);

       this.setState({loading: true});

       const tasks = [...this.state.tasks];
       const task = {...tasks[index]};
       task.done = !task.done;
       this._makePutRequest(id, task).then(response => {
           console.log(response);
           this.setState({loading: false});
           return response;
       }).then(response => {
           if (response.status === 200) {
               console.log(response);
               tasks[index] = response.data;
               this.setState({tasks: tasks});
           }
       }
   );
   };

    render() {

        return (
            !this.state.loading ?
            <div className="main">
                <AddTaskForm click={event => this.addNewTask()} get={event => this.getTaskValue(event)}/>
                {this.state.tasks.map((task) =>
                    <Task name={task.task} remove={() => this.removeTask(task.id)}
                     done={() => this.addClassToTask(task.id)} key={task.id} checked={task.done ? 'done' : ''}/>)
                }
            </div>
                : <Spinner/>
        )
    }
}

export default App;
