$(document).ready(function() {

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