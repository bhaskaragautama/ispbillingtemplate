$("#side-nav").on("click", ".dd-nav", function () {
    $(this).find(".dd-indicator").toggleClass("icon-rotate");
});

// $("#navbar").on("click", ".dropdown-link", function () {
//     $(this)
//         .parent(".dropdown")
//         .on("hide-bs-dropdown", function () {
//             $(this).find("i").removeClass("icon-rotate");
//         });
//     if ($(this).parent(".dropdown").find(".dropdown-menu").is(":visible")) {
//         $(this).find("i").addClass("icon-rotate");
//     } else {
//         $(this).find("i").removeClass("icon-rotate");
//     }
// });
