import { useEffect, useState } from "react";
import "./Sidebarsets.css";

function Settings() {

  const [theme,setTheme]=useState(
    localStorage.getItem("theme") || "dark"
  );


  useEffect(()=>{

    localStorage.setItem(
      "theme",
      theme
    );

    document.body.className=theme;

  },[theme]);



  const settings = [
    {
      title: "👤 Profile Settings",
      description: "Update your username, email, and profile information."
    },
    {
      title: "🎨 Theme",
      description: "Change app appearance between dark and light mode."
    },
    {
      title: "🔔 Notifications",
      description: "Manage alerts for new movies, shows, and recommendations."
    },
    {
      title: "🌐 Language",
      description: "Choose your preferred language for content."
    },
    {
      title: "🔒 Privacy",
      description: "Control account privacy and watch history settings."
    },
    {
      title: "⬇️ Downloads",
      description: "Manage downloaded movies and storage settings."
    }
  ];



  function changeTheme(){

    setTheme(
      theme==="dark"
      ?
      "light"
      :
      "dark"
    );

  }



  return (

    <div className="page">


      <h1>
        ⚙️ Settings
      </h1>


      <p>
        Customize your Screen Scoop experience.
      </p>



      <div className="settings-container">


        {
          settings.map((item,index)=>(


            <div
              className="settings-card"
              key={index}
            >


              <h2>
                {item.title}
              </h2>


              <p>
                {item.description}
              </p>



              {
                item.title==="🎨 Theme"
                ?

                <button onClick={changeTheme}>

                  {
                    theme==="dark"
                    ?
                    "☀️ Light Mode"
                    :
                    "🌙 Dark Mode"
                  }

                </button>

                :

                <button>
                  Manage
                </button>

              }


            </div>


          ))
        }


      </div>


    </div>

  );

}


export default Settings;