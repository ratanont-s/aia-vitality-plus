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
        $(this).toggleClass("open");
      }
      $(".dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".submenu").hide();
        $(this).find(".subtoggle").removeClass("open");
      });
    });
  }

  $('[data-toggle="offcanvas"]').on("click", function () {
    $(this).find('i').toggleClass('bi-x')
    $("body").toggleClass("offcanvas-open");
    $(".offcanvas-collapse").toggleClass("open");
  });

  // Accepts any class name
  var rellax = new Rellax(".rellax");
});
