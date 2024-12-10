//const [state, setState] = useState(initialState);//
//state: The current value of the state.//
//setState: A function used to update the state.//
//initialState: The initial value of the state (can be a primitive, object, or function)//


//Initial State: count is initialized to 0.
//Update State: When the "Increment" button is clicked, setCount updates count by adding 1.
//Re-rendering: The component re-renders automatically when count changes.
import React, { useState } from 'react';

//COUNTER EXAMPLE (SIMPLE)
//function App() {
  //const [count, setCount] = useState(0); // Initial state is 0
  //const increment = () => setCount(count + 1);
  //const decrement = () => setCount(count - 1);
  //return (
    //<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      //<h1 className="text-2xl font-bold mb-4">Count: {count}</h1>
      //<div className="flex space-x-4">
        //<button
          //onClick={increment}
          //className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Increment</button>
        //<button
          //onClick={decrement}
          //className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"> Decrement </button>
      //</div>
    //</div>
  //);
  
//FORM :Managing Multiple States
//function App() {
        //const [name, setName] = useState('');
        //const [email, setEmail] = useState('');

        //const handleSubmit = (e) => {
          //e.preventDefault();
          //alert(`Name: ${name}, Email: ${email}`);
        //};

        //return (
          //<form onSubmit={handleSubmit}>
            //<input 
              //type="text" 
              //placeholder="Name" 
              //value={name} 
              //onChange={(e) => setName(e.target.value)} 
            ///>
            //<input 
              //type="email" 
              //placeholder="Email" 
              //value={email} 
              //onChange={(e) => setEmail(e.target.value)} 
            ///>
            //<button type="submit">Submit</button>
          //</form>
        //);
      //}
      //export default App;

      
      
//USING USESTATE WITH OBJECTS
//function App() {
  //const [user, setUser] = useState({ name: '', age: '' });
  //const handleChange = (e) => {
    //const { name, value } = e.target;
    //setUser((prevState) => ({
      //...prevState,
      //[name]: value,
   // }));
 // };
  //return (
    //<div>
      //<input 
        //type="text" 
        //name="name" 
        //placeholder="Name" 
        //value={user.name} 
        //onChange={handleChange} 
      ///>
      //<input 
       //type="number" 
        //name="age" 
        //placeholder="Age" 
        //value={user.age} 
        //onChange={handleChange} 
      ///>
      //<h2>Name: {user.name}</h2>
      //<h2>Age: {user.age}</h2>
    //</div>
  //);
//}
//export default App;


//FUNCTIONAL USESTATE (Lazy Initialization: If the initial state is computationally expensive, you can pass a function to useState to set it lazily.
function App() {
  const [count, setCount] = useState(() => {
    console.log('Computing initial state...');
    return 0;
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;