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
    // end head
    echo '</head>';
    // start body & wrapper
    echo '<body>';
    echo '<div class="animsition">';
    // navigation
    include_once '../../components/navigation.php';
    // include page form 'pages' dir
    include_once '../../content/' . $page . '.php';
    // footer
    include_once '../../components/footer.php';
    // end wrapper
    echo '</div>';
    // js includes
    include_once '../../components/js-includes.php';
    // end html
    echo '</body>';
    echo '</html>';
  }
?>
