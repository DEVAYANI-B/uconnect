import React from 'react';
// import "boostrap copy.css";
// import "font-awesome.min.css"
import "responsive.css"
import "style.css"
import "style.css.map"
import "style.scss"
const About=()=> { 
  return (
  
<body class="sub_page">

<div class="hero_area">

  <div class="hero_bg_box">
    <div class="bg_img_box">
      {/* <img src="images/hero-bg.png" alt=""> */}
    </div>
  </div>

  
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <a class="navbar-brand" href="index.html">
          <span>
            Finexo
          </span>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  ">
            <li class="nav-item ">
              <a class="nav-link" href="index.html">Home </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="about.html"> About <span class="sr-only">(current)</span> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="service.html">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="why.html">Why Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="team.html">Team</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> <i class="fa fa-user" aria-hidden="true"></i> Login</a>
            </li>
            <form class="form-inline">
              <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>

</div>


<section class="about_section layout_padding">
  <div class="container  ">
    <div class="heading_container heading_center">
      <h2>
        About <span>Us</span>
      </h2>
      <p>
        Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
      </p>
    </div>
    <div class="row">
      <div class="col-md-6 ">
        <div class="img-box">
          {/* <img src="images/about-img.png" alt=""> */}
        </div>
      </div>
      <div class="col-md-6">
        <div class="detail-box">
          <h3>
            We Are Finexo
          </h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
            the middle of text. All
          </p>
          <p>
            Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
          </p>
          <a href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="info_section layout_padding2">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-3 info_col">
        <div class="info_contact">
          <h4>
            Address
          </h4>
          <div class="contact_link_box">
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call +01 1234567890
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
                demo@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div class="info_social">
          <a href="">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 info_col">
        <div class="info_detail">
          <h4>
            Info
          </h4>
          <p>
            necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
          </p>
        </div>
      </div>
      <div class="col-md-6 col-lg-2 mx-auto info_col">
        <div class="info_link_box">
          <h4>
            Links
          </h4>
          <div class="info_links">
            <a class="active" href="index.html">
              Home
            </a>
            <a class="" href="about.html">
              About
            </a>
            <a class="" href="service.html">
              Services
            </a>
            <a class="" href="why.html">
              Why Us
            </a>
            <a class="" href="team.html">
              Team
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 info_col ">
        <h4>
          Subscribe
        </h4>
        <form action="#">
          <input type="text" placeholder="Enter email" />
          <button type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<section class="footer_section">
  <div class="container">
    <p>
      &copy; <span id="displayYear"></span> All Rights Reserved By
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </div>
</section>
</body>
  );
}

export default About;
