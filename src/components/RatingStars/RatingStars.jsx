import "./RatingStars.css";

function RatingStars({rating=0}){

const stars=Math.round(rating/2);

return(

<div className="rating-stars">

{
[1,2,3,4,5].map((star)=>(

<span key={star}>

{star<=stars ? "★":"☆"}

</span>

))

}

</div>

);

}

export default RatingStars;