  $(document).ready(function(){
    $('.modal').modal();
  });
  $(document).ready(function(){
    $('select').formSelect();
  });

/*

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    
  } else {
    //$("#location").html("Could not get the location, Please Allow using location from your device");
    console.log('Error!')
  }
  
  function showPosition(position) {
    //console.log(position);
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    // console.log(lat);
    // console.log(lon);
    //sending lat & lon to getlatlon function which will find your district name
    getlatlong(lat, lon);
  }


  
  function getlatlong(lat, lon) {
    console.log(lon);
    //grabbing your district from JSON api
    var url =
      "https://us1.locationiq.com/v1/reverse.php?key=979e07b14fb6ee&lat=" +
      lat +
      "&lon=" +
      lon +
      "&format=json";
    var settings = {
      async: true,
      crossDomain: true,
      url: url,
      method: "GET",
    };
    $.ajax(settings).done(function (response) {
      console.log(response);
      var division = response.address.state.split(" ");
      console.log(division[0]);
      getdiv(division[0]);
    });
  }


 
  function getdiv(div) {
    console.log(div)
}
*/