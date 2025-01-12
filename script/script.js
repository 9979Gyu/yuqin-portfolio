$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    $('#navbar-placeholder').load('header.html', function(response, status, xhr) {
        if (status == "error") {
            console.error("Error loading the navbar:", xhr.statusText);
        }
    });

    $('#footer-placeholder').load('footer.html', function(response, status, xhr) {
        if (status == "error") {
            console.error("Error loading the footer:", xhr.statusText);
        }
    });
});