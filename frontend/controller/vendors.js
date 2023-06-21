$(document).ready(function() {
    $('#addButton').on('click',function(){
        var name =$('#name').val();
        var site =$('#site').val();

        var newRow = $('<tr>');
        newRow.append('<td>' + name + '</td>');
        newRow.append('<td>' + site + '</td>');
        newRow.append('<button class="deleteButton">Delete</button>');
        newRow.append('<button class="editButton">Edit</button>');

        $('#vendorTable').append(newRow);

        $('#name').val('');
        $('#site').val('');
    });

    $('#vendorTable').on('click', '.deleteButton', function() {
        $(this).closest('tr').remove();
      });

    $('#vendorTable').on('click', '.editButton', function() {

        var row = $(this).closest('tr');
        var name = row.find('.name').text();
        var site = row.find('.site').text(); 

        var newName = prompt('Enter new name:', name);
        var newSite = prompt('Enter new site:', site);

        row.find('.name').text(newName);
        row.find('.site').text(newSite);
    });

});