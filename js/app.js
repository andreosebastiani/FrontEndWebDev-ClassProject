
var menuData = 'https://cdn.rawgit.com/Bumbolio/567f8ed0ac99703fbbe24a64638fcc81/raw/9a0930b07e6b746a76e058ac956e5528aedcfacf/menu.json';


$.ajax({
    type: "GET",
    url: menuData,
    dataType: 'json',
    success: function(data) {
        $.each(data.Food, function(i, menu) {
            $("#foodcontainer").append(buildTable(menu));
        });
    },
});

function buildTable(section) {
   var table = $('<table class="menu">');
   table.append('<thead><tr><th colspan="2"><h4 class="menu-head red">' + section.name + '</h4></th></tr></thead>');

   for (var i = 0; i < section.items.length; i++) {
       var item = section.items[i];
       var row = $('<tr>');
       row.append('<td>' + item.name + '</td>');
       row.append('<td class="menu-price text-right">$' + item.price.toFixed(2) + '</td>');
       table.append(row);
   }
   var wrapper = $('<div class="col span_1_of_2">');

   wrapper.append(table);

   return wrapper;
}