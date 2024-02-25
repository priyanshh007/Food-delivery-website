import React from "react";
import Profile from "./ProfileClass";
import { Outlet } from "react-router-dom";


const About2=()=>{
    return (
        <div>
           <h1>About</h1>
           <h2>This is Namaste React</h2>
          <p>
            <Profile name={"class"}/>
          </p>
            
        </div>
    )
};


class About extends React.Component{
  constructor(props){
    super(props);
    this.state={
      
    };
  }
 
    componentDidMount()
   {
    
    };

  

  render(){
    console.log("render");
   return(<div>
           <h1>About</h1>
           <h2>This is Namaste React</h2>
          <p>
            <Profile name={"class"}/>
          </p>
            
        </div>
   );
}
}
export default About;