$("#side-nav").on("click", ".nav-to", function (e) {
    e.preventDefault();
    window.location.href = $(this).data("link") + ".html";
});
