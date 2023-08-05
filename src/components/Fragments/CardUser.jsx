import '../../styles/Fragments/CardUsers.css'


const CardUsers = (props) => {
    const { children } = props;
    return (
        <div className="container-all-users">
            {children}
        </div>
    )
}

const Header = (props) => {
    const { image } = props
    return (
        <img src={image} className="image-card-all-users" alt="gambar" />
    )
}

const Body = (props) => {
    const { name, role } = props
    return (
        <div className="container-card-users-body">
            <h1>{name}</h1>
            <h3>{role}</h3>
        </div>
    )
}

CardUsers.Header = Header
CardUsers.Body = Body



export default CardUsers;