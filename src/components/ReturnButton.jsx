import { useNavigate } from "react-router-dom";

 
 export default function returnButton(props) {
  let navigate = useNavigate();
    return (
          <div className="returnButton">
            <button className="sucess"  onClick={() => {navigate("/")}}>{props.name}</button>
          </div>
    );
  }