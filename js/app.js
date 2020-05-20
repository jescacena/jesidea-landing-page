// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation(function() {
//     function clickIcon(element) {
//         debugger;
//     }
// });

$(document).ready(function() {
    // var clickIconFn = function(element) {
    //     $(element.target).siblings()[0].click();
    // };
    //
    // $(".overlay-click").click(clickIconFn);

    console.log('JES amosssss jesidea landing page');

    $.getJSON('data/jesidea-projects.json', function(data) {
        var items = [];
        $.each(data, function(key, val) {
            console.log('JES val-->', val);
            var extraLink = (val.links.length > 1) ? '<li><a href="'+val.links[1].url+'">'+val.links[1].url+'</a></li>': '';
            items.push("<li class='simple-list-item' id='" + key + "'><h2>" + val.title + '</h2><img width="100px" src="img/'+val.image+'"/><ul class="right-list"><li><p>'+val.description+'</p></li><li><a href="'+val.links[0].url+'">'+val.links[0].url+'</a></li>'+extraLink+'</ul></li>');
        });

        $('<ul/>', {
            class: 'simple-list',
            html: items.join('')
        }).appendTo('#container');
    });
});
