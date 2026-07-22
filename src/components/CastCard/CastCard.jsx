import "./CastCard.css";

function CastCard({person}){

return(

<div className="cast-card">

<img
src={person.image || "/no-profile.png"}
alt={person.name}
/>

<h3>{person.name}</h3>

<p>{person.role || "Actor"}</p>

</div>

);

}

export default CastCard;