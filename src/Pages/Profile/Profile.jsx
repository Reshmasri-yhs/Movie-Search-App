import { useState,useEffect } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile(){

const navigate=useNavigate();

const [showImageMenu,setShowImageMenu]=useState(false);

const [profile,setProfile]=useState({
image:"",
bio:"",
genres:[],
languages:[],
platforms:[],
actors:[],
directors:[]
});


const [stats,setStats]=useState({
watched:0,
favorites:0,
reviews:0,
hours:0
});


const [level,setLevel]=useState(1);
const [achievements,setAchievements]=useState([]);



useEffect(()=>{

const savedProfile=
JSON.parse(localStorage.getItem("profile"));

if(savedProfile)
setProfile(savedProfile);



const movies=
JSON.parse(localStorage.getItem("movies")) || [];

const history=
JSON.parse(localStorage.getItem("watchHistory")) || [];


const favorites=
movies.filter(movie=>movie.favorite);


const reviews=
movies.filter(
movie=>movie.review &&
movie.review.trim()!==""
);


const userStats={
watched:history.length,
favorites:favorites.length,
reviews:reviews.length,
hours:history.length*2
};


setStats(userStats);



const points=
userStats.watched*10+
userStats.favorites*5+
userStats.reviews*10;


let userLevel=1;

if(points>=100) userLevel=2;
if(points>=250) userLevel=3;
if(points>=500) userLevel=4;
if(points>=1000) userLevel=5;


setLevel(userLevel);



const badges=[];


if(userStats.watched>=1)
badges.push("First Movie Watched");

if(userStats.watched>=10)
badges.push("Movie Explorer");

if(userStats.favorites>=5)
badges.push("Favorite Collector");

if(userStats.reviews>=5)
badges.push("Top Reviewer");

if(userLevel>=5)
badges.push("Cine Master");


setAchievements(badges);


},[]);



const updateProfile=(data)=>{

setProfile(data);

localStorage.setItem(
"profile",
JSON.stringify(data)
);

};



const handleImageUpload=(e)=>{

const file=e.target.files[0];

if(file){

const reader=new FileReader();

reader.onload=()=>{

updateProfile({
...profile,
image:reader.result
});

setShowImageMenu(false);

};

reader.readAsDataURL(file);

}

};



const deleteImage=()=>{

updateProfile({
...profile,
image:""
});

setShowImageMenu(false);

};



const selectOption=(type,value)=>{

updateProfile({

...profile,

[type]:

profile[type].includes(value)

?

profile[type].filter(
item=>item!==value
)

:

[
...profile[type],
value
]

});

};



const genres=[
"Action","Sci-Fi","Romance",
"Comedy","Drama","Thriller",
"Animation"
];


const languages=[
"Telugu","Tamil","Hindi",
"Malayalam","Kannada","English"
];


const platforms=[
"Netflix","Prime Video",
"Hotstar","ZEE5",
"Aha","Sony LIV"
];


const actors=[
"Nani",
"Dulquer Salmaan",
"Fahadh Faasil",
"Sai Pallavi"
];


const directors=[
"Rajamouli",
"Mani Ratnam",
"Nag Ashwin",
"Trivikram"
];



return(

<div className="profile-page">

<div className="profile-card">


<div className="profile-header">


<div className="profile-image-container">


<img
src={
profile.image ||
"/default-profile.png"
}
className="profile-image"
alt="profile"
onClick={()=>
setShowImageMenu(!showImageMenu)
}
/>



{
showImageMenu &&

<div className="image-menu">


<label className="edit-btn">

✏️ Edit

<input
type="file"
accept="image/*"
onChange={handleImageUpload}
/>

</label>


<button
className="delete-btn"
onClick={deleteImage}
>
🗑 Delete
</button>


</div>

}


</div>



<h1>
Movie Explorer
</h1>


<p>
Screen Scoop Member
</p>


<span>
Cinephile Level {level}
</span>


</div>



<textarea

placeholder="Tell us about yourself..."

value={profile.bio}

onChange={(e)=>
updateProfile({
...profile,
bio:e.target.value
})
}

/>



<div className="stats">

<div>
<h2>{stats.watched}</h2>
<p>Movies Watched</p>
</div>

<div>
<h2>{stats.favorites}</h2>
<p>Favorites</p>
</div>

<div>
<h2>{stats.reviews}</h2>
<p>Reviews</p>
</div>

<div>
<h2>{stats.hours}</h2>
<p>Watch Hours</p>
</div>

</div>



{
[
["Favorite Genres",genres,"genres"],
["Favorite Languages",languages,"languages"],
["Streaming Platforms",platforms,"platforms"],
["Favorite Actors",actors,"actors"],
["Favorite Directors",directors,"directors"]
]
.map(section=>(

<div key={section[0]}>

<h3>
{section[0]}
</h3>


<div className="options">

{
section[1].map(item=>(

<button
key={item}
className={
profile[section[2]].includes(item)
?
"selected"
:
""
}
onClick={()=>
selectOption(section[2],item)
}
>
{item}
</button>

))
}

</div>

</div>

))

}



<div className="achievements">

<h3>
Achievements
</h3>


<div>

{
achievements.length===0

?

<span>
Start watching movies to unlock badges
</span>

:

achievements.map(item=>(

<span key={item}>
{item}
</span>

))

}

</div>


</div>



<button
className="back-btn"
onClick={()=>navigate("/")}
>
Back Home
</button>


</div>

</div>

);

}

export default Profile;