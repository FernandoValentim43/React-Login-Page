
export default function Input(props) {
    return (
        <div className={props}>
            <p>{props.name}</p>
            <input  className = {props.className} tag={props.tag} type={props.type} placeholder={props.placeholder}/>
            <p className="error">{props.error}</p>
        </div>
    )
}