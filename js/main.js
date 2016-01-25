$.ajax({
  url: "https://cors-anywhere.herokuapp.com/http://closings.victorlourng.com/api/?all",
  cache: false,
  dataType: "json"
})
  .done(function( data ) {
    $( "#data" ).append( data );
  });
