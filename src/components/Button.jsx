
export default function Button(props) {
  
    return (
          <div className={props.className}>
            <button>{props.name}</button>
          </div>
    );
  }