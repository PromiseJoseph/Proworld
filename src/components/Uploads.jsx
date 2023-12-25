import React from "react";
import { useContext } from "react";
import Uploadsingle from "./single/Uploadsingle";
import setContext from "./context/UploadProvider";



const Uploads = ()=>{
  const [favourite,setFavourite]= useContext(setContext)
    // const addfav= ()=>{
    //   setFavourite(2)
    // }
    return(
        <>
    <section id="portfol io" className="portfolio sections-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Portfolio</h2>
          <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
        </div>


      </div>
      </section>
        </>
    )
}
export default Uploads