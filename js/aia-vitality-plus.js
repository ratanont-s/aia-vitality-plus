$(function () {
  // Prevent closing from click inside dropdown
  $(document).on("click", ".dropdown-menu", function (e) {
    e.stopPropagation();
  });

  // make it as accordion for smaller screens
  if ($(window).width() < 992) {
    $(".dropdown-menu a").click(function (e) {
      e.preventDefault();
      console.log("Click subtoggle");
      if ($(this).next(".submenu").length) {
        $(this).next(".submenu").toggle();
      }
      $(".dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".submenu").hide();
      });
    });
  }

  $('[data-toggle="offcanvas"]').on("click", function () {
    $(".offcanvas-collapse").toggleClass("open");
  });

  // Accepts any class name
  var rellax = new Rellax(".rellax");
});
