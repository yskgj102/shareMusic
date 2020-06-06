jQuery(document).ready(function( $ ) {


});
function header(rootDir){
    $.ajax({
        url: rootDir + "include/header.html", // ディレクトリーhenkou
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
        url: rootDir + "include/footer.html", // ディレクトリーhenkou
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}
