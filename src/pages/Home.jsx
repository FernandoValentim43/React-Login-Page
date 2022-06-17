import "../styles/input.css";

//styled-components
import { Card } from "../styles/styledComponents/card.js"; //card style
import { Check } from "../styles/styledComponents/check.js"; // checkbox style
import { ButtomStyle } from "../styles/styledComponents/buttomStyle.js"; // buttom styles

//react-components
import CardHead from "../components/CardHead"; //img and title
import Input from "../components/Input"; //inputs
import CheckBox from "../components/checkbox.jsx"; //checkbox item
import Button from "../components/Button.jsx";
import MaskedInput from "../components/InputMaskTel";

import { useNavigate } from "react-router-dom";


const Home = () => {
let navigate = useNavigate();

  return (
    <section className="section">
      <Card>
        <CardHead title="Intern Sign Up" />
        <form onSubmit={() => {navigate("/sucess")}}>          
        <div className="input-container">
            <div className="first-container">
              <Input
                className="name"
                name="Full Name * "
                type="text"
                placeholder="Name"
                error="Fullname Invalid"
                pattern="^\b(?!.*?\s{2})[A-Za-z ]{4,50}\b$"
              />
            </div>

            <div className="second-container">
              <Input              
                className="email"
                name="Email * "
                type="email"
                placeholder="foo@bar.com"
                error="Email Invalid"
              />
              <Input              
                className="password"
                name="Password* "
                type="password"
                placeholder="Enter your password"
                error="Password Invalid"
                pattern="^[0-9]*$"
              />
            </div>

            <div className="third-container">
              <MaskedInput
                className="phone"
                name="Phone"
                placeholder="(83) 00000-0000"
                error="Phone Invalid"
              />
              <Input
                className="age"
                name="Birthday * "
                type="date"
                error="Age Invalid"
                min="1901-01-01"
              />
            </div>

            <div className="last-container">
              <div className="checkbox-div">
                <Check>
                  <CheckBox />
                </Check>
              </div>
              <div className="button-div">
                <ButtomStyle color="red">
                  <Button className="button" name="Register"/>
                </ButtomStyle>
              </div>
            </div>
          </div>
        </form>
        </Card>
    </section>
  );
}

export default Home;