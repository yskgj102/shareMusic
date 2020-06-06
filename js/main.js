jQuery(document).ready(function( $ ) {


});
function head(rootDir){
    $.ajax({
        url: rootDir + "include/head.html", //
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
            console.log(html);
        }
    });
}

function navbar(rootDir){
    $.ajax({
        url: rootDir + "include/navbar.html", //
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}

function footer(rootDir){
    $.ajax({
        url: rootDir + "include/footer.html", //
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}
