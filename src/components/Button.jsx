export default function Button(props) {
    return (
          <div class={props.tag}>
            <button>{props.name}</button>
          </div>
    );
  }