// ProfileClass.js
import React from "react";

const Profile = ({ name }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-600">Details about the profile...</p>
  </div>
);



// About.js
import React from "react";
import Profile from "./ProfileClass";

const About = () => (
  <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    <h2 className="text-xl font-semibold mb-2">This is Namaste React</h2>
    <p className="text-gray-700 mb-4">
      Welcome to our About Us page. Learn more about our team and what we do.
    </p>
    <Profile name={"class"} />
  </div>
);

export default About;
