import { Link } from "react-router-dom";

function Block({name}) {
  return (
    <section className="block">
    <div className="block__overlay"></div>
    <div className="container">
      <div className="block__text">
        <h3>{name}</h3>
        <p>
          <Link to="/">Home</Link> / {name}
        </p>
      </div>
    </div>
  </section>
  )
}

export default Block