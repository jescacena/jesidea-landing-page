// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation(function() {
//     function clickIcon(element) {
//         debugger;
//     }
// });


const createProjectItem = (key, val) => {
    const result = [];
    var crazyStyle = (key%2 === 1 && window.visualViewport.width > 800) ? 'margin-left: 300px': '';
    var downloadLink = (val.links.length > 1) ? `download: "${val.links[1].url}"` : '';
    console.log('JES downloadLink-->', downloadLink);
    result.push(`
                <li class='simple-list-item' id="pc-${key}" style="${crazyStyle}">
                    <jwc-project-card class="pc-${key}" image="img/${val.image}"></jwc-project-card>
                </li>
            `);
    result.push(`<script>
                var element = document.querySelector(".pc-${key}");
                element.data  = {
                    name: "${val.title}",
                    description: "${val.description}",
                    website: "${val.links[0].url}",
                    ${downloadLink}
                };
                console.log('JES element-->', element.data);
                </script>`);
    return result.join();
}

const insertProjectsIntoDOM = () => {
    $.getJSON('data/jesidea-projects.json', function(data) {

        var items = [];
        $.each(data, function(key, val) {
            items.push(createProjectItem(key, val));
        });

        $('<ul/>', {
            class: 'simple-list',
            html: items.join('')
        }).appendTo('#container');
    });
}


const createPostItem = (key, val) => {
    const result = [];
    result.push(`<li class='simple-list-item' id="post-${key}">
                    <jwc-post-card class="post-${key}"></jwc-post-card>
                </li>`);

    result.push(`<script>
                    var element = document.querySelector(".post-${key}");
                    element.data  = {
                        title: "${val.title}",
                        description: "${val.description}",
                        image: "${val.image}",
                        url: "${val.url}",
                        date: "${val.date}",
                        tags: "${val.tags}"
                    };
                    console.log('JES element post-->', element.data);
                </script>`);

    return result.join();
}

const insertBlogPostsIntoDOM = () => {
    $.getJSON('data/jesidea-blog.json', function(data) {

        var items = [];
        $.each(data, function(key, val) {
            items.push(createPostItem(key, val));
        });

        $('<ul/>', {
            class: 'simple-list',
            html: items.join('')
        }).appendTo('#container-blog');
    });
}

////// -- DOCUMENT READY
$(document).ready(function() {
    $('#container') && insertProjectsIntoDOM();
    $('#container-blog') && insertBlogPostsIntoDOM();
});
