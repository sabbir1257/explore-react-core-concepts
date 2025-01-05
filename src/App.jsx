import './App.css';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Device name="Laptop" price="55"/>
      <Device name="Mobile" price="17"/>
      <Device name="Watch" price="3"/>
      <Person />
      <Student grade="7" score="99" />
      <Student />
      <Student />
      <Developer/>
    </>
  )
}

function Device(props){
  // console.log(props);
  return <h2>This device: {props.name} price: {props.price}</h2>
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'sakib', age: 12 };
  return <h3>I am {person.name} person with age: {age + money}</h3>
}

function Student(props) {
  console.log(props)
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name: </p>
      <p>age: </p>
    </div>
  )
}

function Developer(){
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