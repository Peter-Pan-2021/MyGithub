import React, { Component } from 'react';

class Classprops extends Component {
    
    render() { 
        return ( 
            <div>
            {/* <h1>What's the matter?</h1> */}
            <h1>My name is {this.props.name} from {this.props.place}</h1>
            </div>
         );
    }
}
 
export default Classprops;