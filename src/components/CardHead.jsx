export default function CardHead(props) {
  return (
        <div className="card-head">
          <div className="img-section">
            <img src="..\src\styles\img.jpg"  alt="" />
          </div>

          <h2>{props.title}</h2>
        </div>
  );
}
