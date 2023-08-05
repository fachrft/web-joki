import '../../styles/Fragments/Card.css'

const Card = (props) => {
    const { children } = props
    return (
        <div className="container-card">
            {children}
        </div>
    )
}

const Header = (props) => {
    const { image } = props
    return (
        <img src={image} className="image-card" alt="gambar" />
    )
}

const Body = (props) => {
    const { title, desc } = props
    return (
        <div className="container-card-body">
            <h1>Joki {title}</h1>
            <p>{desc}</p>
        </div>
    )
}


Card.Header = Header
Card.Body = Body


export default Card