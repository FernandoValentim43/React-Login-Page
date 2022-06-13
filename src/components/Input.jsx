
export default function Input(props) {
    return (
        <div>
            <p>{props.name}</p>
            <input class={props.tag} type={props.tsype} placeholder={props.placeholder}/>
            <p className="error">{props.error}</p>
        </div>
    )
}