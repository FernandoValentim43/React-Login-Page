export default function Button(props) {
 

    return (
          <div tag={props.tag}>
            <button>{props.name}</button>
          </div>
    );
  }