<?php
  function build($page) {
    // html headers
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
    // headers and includes
    include_once '../../components/meta-data.php';
    include_once '../../components/head-includes.php';
    include_once '../../components/ie-support.php';
    echo '</head>';
    echo '<body>';
    // google analytics
    include_once '../../components/google-analytics.php';
    // image for facebook shared link
    echo '<img src="http://www.onflo.io/images/onflo-avatar.jpg" height="0px" width="0px">';
    // start page wrapper
    echo '<div class="animsition">';
    // navigation
    include_once '../../components/navigation.php';
    // include page form 'pages' dir
    include_once '../../content/' . $page . '.php';
    // end wrapper
    echo '</div>';
    // js includes
    include_once '../../components/js-includes.php';
    include_once '../../components/hubspot.php';
    // end html
    echo '</body>';
    echo '</html>';
  }
?>
