import logo from './logo.svg';
import './App.css';
import Test from './components/Test'
import React, { useState, props } from 'react';
import MyTasks from './components/MyTasks';

function App() {

  const [Task, setTask] = React.useState('')
  const [Alltasks, setAlltasks] = React.useState([])
  const [Price, setPrice] = React.useState(0)
  let [Total, setTotal] = React.useState(0)

  let handleChangeTask = (e) => {
     setTask(e.target.value)
     console.log(Task)
  }

  let handleChangePrice = (e) => {
    if(e.target.value > 0) {
      setPrice(e.target.value)
      console.log(Task)
    }
  }

  let handleDeletePrice = (e) =>{
   // alert('ss')
     console.log('index=',e.target.id)
     let filteredTasks=  Alltasks.filter(function(item,i){
      //console.log(i + ' - ' + e.target.id)
      if(i === parseInt(e.target.id)) {
        //console.log(item.Price)
        Total = parseFloat(Total) - parseFloat(item.Price)
        setTotal(Total)
      }
      
      return (i !== parseInt(e.target.id))
     });

    console.log(filteredTasks)
    setAlltasks(filteredTasks)

    //setTotal(reducedTotal)
  }


  let handleClick = () => {
    setAlltasks([...Alltasks,{Task:Task, Price:Price}])
    setTask('')
    setPrice(0)
    setTotal(parseFloat(Total) + parseFloat(Price))
  }
  
  return (
    <div className="App">
        <h4>Hello</h4>
        <div className='divclass '>
          <Test task={Task} handleChangeTask={handleChangeTask} handleChangePrice={handleChangePrice} 
          handleClick={handleClick} price={Price}   />
        </div>
        
        <div className='divclass '>
          <br />
          <MyTasks Alltasks = {Alltasks} handleDeletePrice={handleDeletePrice} />

          <br />
          Total : {Total}
        </div>
    </div>
  );
}

export default App;
