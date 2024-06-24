const Usercard = ({image,fullName,age,gender,email}) =>{
    return(
        <div>
            <img src={image} alt={`${fullName}profile`}/>
            <h3>{fullName}</h3>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{email}</p>

        </div>
    )
}
export default Usercard;


