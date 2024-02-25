import React from "react";
import ReactDOM  from "react-dom/client";

/**
 * Header
 * -logo
 * -navbar
 * Body
 * -serch
 * -Restaurant container
 * -rest card
 * Footer
 * -copyright
 * -Links
 * -Address
 * -contact
 */












//react element => object =>HTML ELEMENT (On rendering)

const parent=React.createElement("h1",{id:"parent"}," Namaste React");

const root=ReactDOM.createRoot(document.getElementById("root"));

//JSX--NOT HTML IN JS

//JSX=> Babel transpiles it to React.create element(js object)=>HTML Element (Render)

const jsxHeading=<h1 id="parent" className="new"> Namaste react using jsx </h1>

//root.render(jsxHeading);
//REACT FUNCTIONAL COMPONENT
const Title=()=>{
    return <h1>I am initialiser</h1>
};

//Component composition
const number=1000;
const HeadingComponent=()=>{
return <div>
    <Title/>
    <h1 className="heading">Namaste react functional component</h1>
    <h2>{number}</h2>
    </div>
};

//<headingcomponent/> thats how functional component get rendered by babel
root.render(<HeadingComponent/>);
