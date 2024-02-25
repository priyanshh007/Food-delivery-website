import React from "react";

class Profile extends React.Component{
    constructor(props){ 
         super(props);
      //creation of use state
      this.state={
        userInfo:{
          name:"Dummy name",
          location:"Dummy Location",
        },
      };
    }
    
  async componentDidMount()
   {
    const data=await fetch("https://api.github.com/users/sneha");

    const json=await data.json();
     
    this.setState({
      userInfo:json,
    });

   }

   componentDidUpdate(){
    
   }



     render(){
      var p=4;
       return <>
       <h1>Profile Class component</h1>
       <img src={this.state.userInfo.avatar_url}/>
       <h2> Name : {this.state.userInfo.name}</h2>
       <h2> Location : {this.state.userInfo.location}</h2>
       </>
     }
}

export default Profile;