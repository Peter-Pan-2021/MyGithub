import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Classprops from './components/Classprops';
import Functionprop from './components/Functionprop';
import Listmanage from './components/Listmanage';
import Greeting from './components/Greeting';
const {useState}=React;

class App extends Component {
  state = {  
    count:0
  }
  onClick(){
    this.setState(state=>({count:this.state.count+1}));
  }
  render() { 
    return (  
      <div>
      <button onClick={this.onClick.bind(this)}>
        You have clicked {this.state.count} times
      </button>
      <Greeting/>
      <Classprops name="Peter" place="abc"/>
      <Classprops name="Pan" place="def"/>
      <Functionprop name="Hong" place="Kong"/>
      <TimeArea />
      <Listmanage />

      </div>
    );
  }
}


function TimeArea(){
  const [theTime,setTheTime]=useState(new Date().toLocaleString());
  setTimeout(
    function(){
    setTheTime(new Date().toLocaleString())
  },1000)
  return <p>The current time is {theTime}.</p>
} 

function ClickCountButton2()
{ 
  const [count, increment] = useCount();
  return(
   <button onClick={()=>increment()}>
     Your {count} times
   </button>

  );
}
function useCount()
{
  const [count, setCount]=useState(0);
  
  function increment(){
    setCount(count=>count+1)
  }

 return[count,increment];
}

export default App;

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
