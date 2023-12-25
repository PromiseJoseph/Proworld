import React from "react";

const Header = ()=>{
  const AppName = "ProWorld"
    return(
        <>
            <div className="page-index">

{/* <!-- ======= Header ======= --> */}
<header id="header" className="header d-flex align-items-center fixed-top">
  <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

    <a href="index.html" className="logo d-flex align-items-center">
      {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
       <img src="assets/img/logo.png" alt=""/>
       {/* <input/> */}
      <h1 className="d-flex align-items-center">{AppName}</h1>
    </a>

    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    <nav id="navbar" className="navbar">
      <ul>
        <li><a href="index.html" className="active">Home</a></li>
        <li><a href="about.html">About</a></li>
        
        <li className="dropdown"><a href="#"><span>Uploads</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
          <ul>
            <li><a href="#">Foreign</a></li>
            <li><a href="#">Naija</a></li>
          </ul>
        </li>
        <li><a href= "#">Blog</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>{/*<!-- .navbar -->*/}

  </div>
</header>{/*<!-- End Header -->*/}
</div>

        </>
    )
}
export default Header