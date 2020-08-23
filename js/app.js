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

    // console.log('JES amosssss jesidea landing page');

    $.getJSON('data/jesidea-projects.json', function(data) {
        var items = [];
        $.each(data, function(key, val) {
            var crazyStyle = (key%2 === 1 && window.visualViewport.width > 800) ? 'margin-left: 300px': '';
            var downloadLink = (val.links.length > 1) ? `download: "${val.links[1].url}"` : '';
            console.log('JES downloadLink-->', downloadLink);
            items.push(`<li class='simple-list-item' id="pc-${key}" style="${crazyStyle}"><jwc-project-card class="pc-${key}" image="img/${val.image}"></jwc-project-card></li>`);
            items.push(`<script>
                var element = document.querySelector(".pc-${key}");
                element.data  = {
                    name: "${val.title}",
                    description: "${val.description}",
                    website: "${val.links[0].url}",
                    ${downloadLink}
                };
                console.log('JES element-->', element.data);
            </script>`);
        });
        // $.each(data, function(key, val) {
        //     var extraLink = (val.links.length > 1) ? '<li><a href="'+val.links[1].url+'">'+val.links[1].url+'</a></li>': '';
        //     items.push("<li class='simple-list-item' id='" + key + "'><h2>" + val.title + '</h2><img width="100px" src="img/'+val.image+'"/><ul class="right-list"><li><p>'+val.description+'</p></li><li><a href="'+val.links[0].url+'">'+val.links[0].url+'</a></li>'+extraLink+'</ul></li>');
        // });

        $('<ul/>', {
            class: 'simple-list',
            html: items.join('')
        }).appendTo('#container');
    });
});
