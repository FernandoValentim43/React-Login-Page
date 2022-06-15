
export default function Input(props) {
    return (
        <div>
            <p>{props.name}</p>
            <input  className = {props.tag} tag={props.tag} type={props.type} placeholder={props.placeholder}/>
            <p className="error">{props.error}</p>
        </div>
    )
}