const cardStyle = {
    border: 'solid 2px',
    padding:'20px',
    margin:'20px',
    borderRadius:'15px'
}

export const ProfileCard = ({user}:any)=>{
    return(
    <div style={cardStyle}>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <p>Job: {user.job}</p>
    <p>Country: {user.country}</p>
    </div>
    )
}