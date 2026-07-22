import "./PlatformCard.css";

function PlatformCard({ platform }){

return(

<div
className="platform-card"
style={{"--accent":platform.accent}}
>

<div className="platform-logo">
<img
src={platform.logo}
alt={platform.name}
/>
</div>

<div className="platform-content">

<h2>{platform.name}</h2>

<p>{platform.description}</p>

<h4>Popular Titles</h4>

<ul>
{platform.popular.map((title,index)=>(
<li key={index}>{title}</li>
))}
</ul>

<button>Explore Platform</button>

</div>

</div>

);

}

export default PlatformCard;