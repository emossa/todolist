import React, { Component } from 'react';
import Todo from './todo';
import Validation from './validation';
import './todolist.css';


class ToDoList extends Component {
  state = {
    nome: "",
    data: "",
    dataString: "",
    todos: [],
    done: [],
    sortByDate : (array) =>{
      array.sort((a,b) => (a.data > b.data) ? 1 : ((b.data > a.data) ? -1 : 0));
    },
    isDisabledNome: false,
    isDisabledData: false,
    class: "",
  };

  handleNameToDo = (event)=>{
    this.setState({
      nome: event.target.value
    });
  }

  handleExpDateToDo = (event)=>{
    this.setState({
      data: event.target.value
    });
  }

  makeItToDo = (index)=>{
    let newStateToDo = Object.assign([], this.state.todos);
    let newStateDone = Object.assign([], this.state.done);

    newStateToDo.push({nome: newStateDone[index].nome, data: newStateDone[index].data, dataString: newStateDone[index].dataString})
    newStateDone.splice(index, 1);
    this.state.sortByDate(newStateToDo);
    this.setState(
      {todos:newStateToDo,
      done:newStateDone}
    );
  }

  makeItDone = (index)=>{
    let newStateToDo = Object.assign([], this.state.todos);
    let newStateDone = Object.assign([], this.state.done);

    newStateDone.push({nome: newStateToDo[index].nome, data: newStateToDo[index].data, dataString: newStateToDo[index].dataString})
    newStateToDo.splice(index, 1);
    this.state.sortByDate(newStateDone);
    this.setState(
      {todos:newStateToDo,
      done:newStateDone}
    );
  }



  addToDo = (e)=>{
    if(this.state.nome !== "" && this.state.data!==""){

      let newState = Object.assign([], this.state.todos);
      const data = new Date(this.state.data);
      newState.push({nome: this.state.nome, data: data, dataString: data.getDate() + '/' + (data.getMonth() +1) + '/' + data.getFullYear()});
      this.state.sortByDate(newState);
      this.setState({nome:"",data:"",todos:newState, isDisabledNome: false, class: "Help__Open"});
      setTimeout(()=>{this.setState({class:""})}, 4000);

    }
    else if(this.state.nome === ""){
      this.setState({isDisabledNome: true});
    }
    if(this.state.data === "")
      this.setState({isDisabledData: true});
    else if (this.state.data !== "") {
      this.setState({isDisabledData: false});
    }
  }



  render() {
    return (
      <div className="Container">
                <h1 className={this.state.class + " Help"}>Double click to check the "to do"</h1>
                <div className="Container__ToDo">
                      <div className="Form">


                          <input type="text" value={this.state.nome} onChange={this.handleNameToDo} placeholder="Type to do name"></input>
                          <Validation isEnabled={this.state.isDisabledNome}/>


                          <input type="date" value={this.state.data} onChange={this.handleExpDateToDo}/><br/>
                          <Validation isEnabled={this.state.isDisabledData}/>
                          <button onClick={this.addToDo} type="button">ADD TO DO</button>


                      </div>
                      <div className="List">
                        <div>

                          {
                            this.state.todos.map((todo,index)=>{
                              return(<Todo type="Todo" index={index} func={this.makeItDone.bind(this, index)} ExpDate={todo.dataString}>{todo.nome}</Todo>)
                            })
                          }
                        </div>
                        <div>

                          {
                            this.state.done.map((todo, index)=>{
                              return(<Todo type="Done" index={index} func={this.makeItToDo.bind(this, index)} ExpDate={todo.dataString}>{todo.nome}</Todo>)
                            })
                          }
                        </div>
                      </div>

                </div>

      </div>

    );
  }
}

export default ToDoList;
