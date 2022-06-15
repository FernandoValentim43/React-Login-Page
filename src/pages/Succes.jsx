import "../styles/input.css";

import { Card } from "../styles/styledComponents/card.js"; //card styled
import { ButtomStyle } from "../styles/styledComponents/buttomStyle.js" ; // checkbox style

//react-components
import CardHead from "../components/CardHead"; //img and title
import ReturnButton from "../components/ReturnButton.jsx";





export default function Sucess() {
    return (
     <section>
       <Card>
        <CardHead title="Sucess!" />
        <ButtomStyle >
          <ReturnButton tag="sucess" name="Go Back!"/>
        </ButtomStyle>
       </Card>
     </section>
    );
  }