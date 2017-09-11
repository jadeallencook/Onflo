<!-- mobile open btn -->
<button class="action action--open" aria-label="Open Menu"><span class="icon icon--menu"></span></button>

<!--  menu wrapper -->
<nav id="ml-menu" class="menu">

  <!-- mobile close btn -->
  <button class="action action--close" aria-label="Close Menu"><span class="icon icon--cross"></span></button>

  <div class="menu__wrap">

    <!-- menu -->
    <ul data-menu="main" class="menu__level">
      <li class="menu__item"><a class="menu__link menu__link--current" data-submenu="submenu-1" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" data-submenu="submenu-2" href="#">About</a></li>
      <li class="menu__item"><a class="menu__link" data-submenu="submenu-3" href="#">Services</a></li>
      <li class="menu__item"><a class="menu__link" href="portfolio.html">Portfolio</a></li>
      <li class="menu__item"><a class="menu__link" href="blog.html">Blog</a></li>
      <li class="menu__item"><a class="menu__link" href="testimonials.html">Testimonials</a></li>
      <li class="menu__item"><a class="menu__link" href="contact-us.html">Contact us</a></li>
      <li class="menu__item"><a class="menu__link" data-submenu="submenu-4" href="#">Pages</a></li>
    </ul>

    <!-- submenu -->
    <ul data-menu="submenu-1" class="menu__level">
      <li class="menu__item"><a class="menu__link menu__link--current" href="index.html">Slider</a></li>
      <li class="menu__item"><a class="menu__link" href="index2.html">Image</a></li>
      <li class="menu__item"><a class="menu__link" href="index3.html">Video</a></li>
    </ul>

  </div>
</nav>

<header>
  <div class="header-upper"><a class="logo" href="index.html"><img src="../../images/onflo-white-logo.png" alt="Onflo Logo" /></a> </div>
  <div class="header-lower">
    <ul class="quick-contact">
      <li>
        <b>EMAIL : </b>
        <a href="mailto:#"><i class="ion ion-email visible-xs"></i><span>hello@onflo.io</span></a>
      </li>
      <li class="social-links">
        <b>GET SOCIAL :</b>
        <a href="#" target="_blank"><i class="ion ion-social-facebook"></i></a>
        <a href="#" target="_blank"><i class="ion ion-social-twitter"></i></a>
        <a href="#" target="_blank"><i class="ion ion-social-googleplus"></i></a>
        <a href="#" target="_blank"><i class="ion ion-social-instagram"></i></a>
      </li>
    </ul>
    <p class="copyright">&copy; <?php echo date("Y"); ?>. All right reserved.</p>
  </div>
</header>
