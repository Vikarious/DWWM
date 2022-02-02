$('.dropDownOption').click(function() {
    var numberTables = parseInt($(this).html()),
        tableHTML = "<table class='table'><tr><td>Foo</td><td>Bar</td><tr><td>Spam</td><td>Ham</td></tr></table>";
    for (var i = 0; i < numberTables; i++) {
        $('body').append(tableHTML);
    }
});