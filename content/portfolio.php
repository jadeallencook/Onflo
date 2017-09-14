<div class="main-container-outer">
  <div class="container">
    <div class="top-bar-container">
      <div class="container">
        <div class="top-bar">
          <ul class="breadcrumb">
            <li><a href="../home">Home</a></li>
            <li><span>Portfolio</span></li>
          </ul>
        </div>
        <!-- Share start -->
        <div class="share-box">
          <ul class="share-list">
            <li><a href="" class="addthis_button_facebook"><span><i class="ion ion-social-facebook"></i></span></a></li>
            <li><a href="" class="addthis_button_twitter"><span><i class="ion ion-social-twitter"></i></span></a></li>
            <li><a href="" class="addthis_button_google_plusone_share"><span><i class="ion ion-social-googleplus"></i></span></a></li>
            <li><a href="" class="addthis_button_linkedin"><span><i class="ion ion-social-linkedin"></i></span></a></li>
          </ul>
          <a href="#" class="share-trigger"><i class="ion ion-share"></i> SHARE</a> </div>

        <!-- Share end -->
      </div>
    </div>
    <div class="main-container">
      <div class="inner-banner parallax" data-parallax-speed="5" style="background-image:url(../../images/erick-with-camera.jpg);">
        <h2>Portfolio</h2>
      </div>

      <!-- Content Holder Start -->
      <div class="content-holder">
        <h3 class="content-title">Our Portfolio</h3>
        <p class="large-para">Bring your business up to speed, aesthetically and technically. Nowadays, more and more people visit businesses online before deciding if they want a product or service. At that rate, having an outdated, stale web presence could be costing you business.</p>
        <p>Please have a look at our portfolio items to learn more about the types of work that we've have done in the past. We're pleased to have worked with these professionals and will offer the same level of dedication for your project as well. Clients are able to be proactively get involved in updating their own websites within the framework we setup just for them without any prior coding knowledge. We give you the tools you need to successfully keep your websites current and fresh!</p>
        <div class="portfolio-container">
          <ul class="project-category">
            <li><a href="#" data-filter="" class="active">All</a></li>
            <li><a href="#" data-filter="webdev">Web & Graphic</a></li>
            <li><a href="#" data-filter="video">Video Production</a></li>
          </ul>
          <div id="portofolio-container">
            <div id="masonry" class="grid project-gallery">
          <?php
            include '../../enviroment/portfolio.php';
            foreach($projects as $key=>$value):
          ?>


            <div class="grid-sizer"></div>
            <div class="gutter-sizer"></div>
            <div data-filter="<?php echo $value["type"]; ?>" class="grid-item">
              <div class="box-item">
                <a href="<?php echo $value["link"]; ?>" target="_blank">
                  <img src="<?php echo $value["image"]; ?>" alt="">
                </a>
              </div>
              <div class="project-heading">
                <h6><?php echo $value["name"]; ?></h6>
                <p><?php echo $value["subtitle"]; ?></p>
              </div>
            </div>

          <?php endforeach; ?>
</div></div>
        </div>
      </div>
      <!-- Content Holder End -->
      <div class="quote-box">
        <h6>Want to discuss a new project ?</h6>
        <a href="../start" class="btn btn-default">LET'S TALK</a> </div>
    </div>
  </div>
</div>
