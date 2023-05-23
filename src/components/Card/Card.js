export const Card = (props) => {

  return (
    <div className="card" style={{ width: '18rem' }}>
      {props.img && <img src={props.img} className="card-img-top" alt="..." />}
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}