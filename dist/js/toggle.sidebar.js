$("#navbar").on("click", ".toggle-sidebar", function (e) {
    e.preventDefault();
    $(this).find("i").toggleClass("icon-rotate");
    if ($("#sidebar").css("display") == "none") {
        setTimeout(function () {
            $("#sidebar").fadeIn();
        }, 300);
    } else {
        $("#sidebar")[0].style.setProperty("display", "none", "important");
    }
    $("#main-content").toggleClass("col-md-11 col-lg-9 col-xl-10 col-12");
});
