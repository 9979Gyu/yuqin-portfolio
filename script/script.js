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

    $(".education button").click(function(){
        var icon = $(this).find('i');
        var cardContent = $(this).closest('.education').find('.card-content');
        cardContent.toggleClass('is-hidden is-show');
        icon.toggleClass('fa-angle-down fa-angle-up');
    });

    $(".tabs li").click(function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Remove "is-active" class from all tabs and add to the clicked one
        $(".tabs li").removeClass("is-active");
        $(this).addClass("is-active");

        // Get the target content ID from the clicked tab's href
        var target = $(this).find("a").attr("href").substring(1); // "acedemic" or "achievement"

        // Hide all tab content and show the corresponding one
        $(".tab-content").removeClass("is-show").addClass("is-hidden");
        $("#" + target).removeClass("is-hidden").addClass("is-show");
    });

});