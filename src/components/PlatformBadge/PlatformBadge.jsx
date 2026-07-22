import "./PlatformBadge.css";

function PlatformBadge({platform}){

return(

<a
className="platform-badge"
href={platform.url || "#"}
target="_blank"
rel="noreferrer"
>

{platform.name}

</a>

);

}

export default PlatformBadge;