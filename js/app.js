// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation(function() {
    function clickIcon(element) {
        debugger;
    }
});

$(document).ready(function() {
    var clickIconFn = function(element) {
        $(element.target).siblings()[0].click();
    };

    $(".overlay-click").click(clickIconFn);

});