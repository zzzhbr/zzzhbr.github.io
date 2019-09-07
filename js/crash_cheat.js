window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "../../images/failure.ico");
      $('[rel="shortcut icon"]').attr('href', "../../images/failure.ico");
      document.title = '(●—●)喔哟，崩溃啦！';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "../../images/32x32.png");
      $('[rel="shortcut icon"]').attr('href', "../../images/32x32.png");
      document.title = '(/≧▽≦/)咦！页面又好了！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
    }
  });
};