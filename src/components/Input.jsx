
export default function Input(props) {
    return (
        <div>
            <p>{props.name}</p>
            <input tag={props.class} type={props.type} placeholder={props.placeholder}/>
            <p className="error">{props.error}</p>
        </div>
    )
}