import React from "react";
import Card from "./Card";
import Heading from "./Heading";
import contacts from "../contacts";
import Avatar from "./Avatar";
function App() {
  return (
    <div>
      <Heading />
      <Avatar imgURL="https://media-exp1.licdn.com/dms/image/C4E03AQEHf6RY9bxgdw/profile-displayphoto-shrink_800_800/0/1649763052505?e=1661385600&v=beta&t=l3QPlN6hYIVX9qRG7LarD5ExcTEinMxuC1tDUkcNvWU" />
      <Card 
      name={contacts[0].name}
      imgURL={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email}
      />

      <Card 
      name={contacts[1].name}
      imgURL={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email}
      />
      <Card 
      name={contacts[2].name}
      imgURL={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email}
      />
    </div>
  );
}

export default App;
