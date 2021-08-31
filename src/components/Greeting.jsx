import React, { Component } from 'react';
const {useState}=React;
const ThemeContext=React.createContext('light');

//class Greeting extends Component {
    function Greeting(props){
    // constructor(props){
    //     super(props);
    //     this.state={
    //         name:'Mary'
    //     }
    // }
    const [name,setName]=useState('Mary');
    function handleNameChange(e){
        setName(e.target.value);
    }

    //render() { 
        return (  
            <div>
                {/* <Page user={user} avatarSize={avatarSize}/> */}
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
            
                <input value={name} onChange={handleNameChange}/>
            </div>
        );
   // }
}

function Page(props){
    const user = props.user;
    
    // const userLink=(
    //     <link href={user.permalink}>
    //         <avatar user={user} size={props.avatarSize}/>
    //     </link>
    // );
    // return <pageLayout userLink={userLink}/>;
}

function Toolbar() {    
    return(
        <div>
            <ThemedButton />
        </div>
    )    
}

class ThemedButton extends Component {
    static contextType=ThemeContext;
   
    render() { 
        return (
            <button theme={this.context}>What?</button>
          );
    }
}

export default Greeting;