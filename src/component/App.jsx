
import React, { Component } from "react";
import Nav from "./Nav";
import Data from "./Data";
import { myData } from "./myData";


// import { Route } from "react-router-dom";
class App extends Component{
    state = {
    data:myData
        }
    
    render()
    {
        
return (
    <div>
       <Data data={this.state.data}/>
        {/* <Route path="/todos" component={Todos}/>  */}``
       
<myData />

    </div>
)
    }
}
export default App;