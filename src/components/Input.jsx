export default function Input(props) {  
    return (
    <div className={props.className}>
      <p>{props.name}</p>

      <input
        name={props.name}
        className={props.className}
        tag={props.tag}
        type={props.type}
        placeholder={props.placeholder}
        required={true}
        pattern={props.pattern}
        min={props.min}
        autoComplete="off"
        />

      <p className="error">{props.error}</p>
    </div>
  );
}
