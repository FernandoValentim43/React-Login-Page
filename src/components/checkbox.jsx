import React, { useState } from "react" ;

const useVisibility = (component, visibility = false) => {
    const [visible, setVisibility] = useState(() => visibility);
    return [visible ? component : null, () => setVisibility((v) => !v)];
};


export default function CheckBox()  {
const [pElement, togglePvisibility] = useVisibility(
  <p className="checkError">You must accept the terms</p>, true)

  return (
      <div>
        <label>
          <input type="checkbox" required={true}
           className="check" onClick={togglePvisibility}/>
          I accept the terms and privacy
        </label>
        {pElement}
      </div>
    );
  };