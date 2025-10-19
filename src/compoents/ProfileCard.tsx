export const ProfileCard = ({user}:any)=>{
    return(<>
    <p>Name: {user.name}</p>
    <p>Age: {user.age}</p>
    <p>Job: {user.job}</p>
    <p>Country: {user.country}</p>
    </>)
}