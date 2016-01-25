$(document).ready(function(){

$.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://closings.victorlourng.com/api/?all",
  cache: false,
  dataType: "json"
})
  .done(function( data ) {
    $.each(data, function(index,item){
      $( "#data" ).append( "<tr><td>"+ index+"</td><td>"+ item.name+"</td><td>"+item.status+"</td></tr>" );

    })
  });


});
