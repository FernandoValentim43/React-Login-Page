
export default function Input(props) {
    return (
        <div className="input-conainter">
            <p>{props.name}</p>
            <input type={props.type} placeholder={props.placeholder}/>
            <p class="error">{props.error}</p>
        </div>
    )
}