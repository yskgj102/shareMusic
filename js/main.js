jQuery(document).ready(function( $ ) {


});
function header(rootDir){
    $.ajax({
        url: rootDir + "include/header.html", //
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
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
