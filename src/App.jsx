import './App.css';
import Todo from './Todo';

function App() {
  return (
    <>
      <h3>Vite + React</h3>
      <Todo task="Learn React" isDone={true} />
      <Todo task="Core concepts" isDone={false} />
      <Todo task="Try JSX" isDone={true} />
      {/* <Device name="Laptop" price="55"/>
      <Device name="Mobile" price="17"/>
      <Device name="Watch" price="3"/>
      <Person />
      <Student grade="7" score="99" />
      <Student grade={12} score="85" />
      <Student />
      <Developer/> */}
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This device: {props.name} price: {props.price}</h2>
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'sakib', age: 12 };
  return <h3>I am {person.name} person with age: {age + money}</h3>
}

const { grade, score } = { grade: '7', score: '99' };

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  // console.log(props)
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App;