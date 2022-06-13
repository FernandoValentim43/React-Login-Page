import { Card } from "../styles/card.js"; //card styled-component
import { Check } from "../styles/checkbox.js"; //card styled-component


import CardHead from "../components/CardHead"; //img and title
import Input from "../components/Input"; //inputs
import CheckBox from "../components/checkbox.jsx";
import Button from "../components/Button";


import "../styles/input.css";


export default function Home() {
  return (
    <Card>
      <CardHead title="Intern Sign Up" />

      <div className="input-container">
       
       <div className="first-container">
        <Input tag="name" name="Full Name * " type="text" placeholder="Name" error="Fullname Invalid" />
       </div>

       <div className="second-container">
        <Input tag="email" name="Email * " type="email" placeholder="foo@bar.com" error="Email Invalid" />
        <Input tag="password" name="Password* " type="password" placeholder="Enter your password" error="Password Invalid" /> 

       </div>

       <div className="third-container">
        <Input tag="phone" name="Phone" type="tel" placeholder="(83) 00000-0000" error="Phone Invalid" />
        <Input name="Birthday * " type="date" error="Age Invalid" />
       </div>

       <div className="last-container">
          <Check>
            <CheckBox/>
          </Check>
          
          <Button/>
       </div>



      </div>
    </Card>
  );
}
