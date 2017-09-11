<!-- mobile open btn -->
<button class="action action--open" aria-label="Open Menu"><span class="icon icon--menu"></span></button>

<!--  menu wrapper -->
<nav id="ml-menu" class="menu">

  <!-- mobile close btn -->
  <button class="action action--close" aria-label="Close Menu"><span class="icon icon--cross"></span></button>

  <div class="menu__wrap">

    <!-- menu -->
    <ul data-menu="main" class="menu__level">
      <!-- add to active page: menu__link--current -->
      <li class="menu__item"><a class="menu__link" href="../home">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="../about">About</a></li>
      <li class="menu__item"><a class="menu__link" href="../services">Services</a></li>
      <li class="menu__item"><a class="menu__link" data-submenu="submenu-1">Promotions</a></li>
      <li class="menu__item"><a class="menu__link" href="../portfolio">Portfolio</a></li>
      <li class="menu__item"><a class="menu__link" href="../blog">Blog</a></li>
      <li class="menu__item"><a class="menu__link" href="../testimonials">Testimonials</a></li>
      <li class="menu__item"><a class="menu__link" href="../contact">Contact</a></li>
    </ul>

    <!-- submenu -->
    <ul data-menu="submenu-1" class="menu__level">
      <li class="menu__item"><a class="menu__link" href="../restaurant">Restaurant</a></li>
      <li class="menu__item"><a class="menu__link" href="../wholesaler">Wholesaler</a></li>
      <li class="menu__item"><a class="menu__link" href="../decor">Home Decor</a></li>
      <li class="menu__item"><a class="menu__link" href="../tattoo">Tattoo Artist</a></li>
      <li class="menu__item"><a class="menu__link" href="../realestate">Real Estate</a></li>
      <li class="menu__item"><a class="menu__link" href="../phone">Phone Repair</a></li>
      <li class="menu__item"><a class="menu__link" href="../attractions">Attraction</a></li>
      <li class="menu__item"><a class="menu__link" href="../fitness">Fitness</a></li>
    </ul>

  </div>
</nav>

<header>
  <div class="header-upper">
    <a class="logo" href="index.html">
      <img src="../../images/onflo-white-logo.png" id="navigation-logo" alt="Onflo Logo" />
    </a>
  </div>
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
