let url = 'https://raw.githubusercontent.com/RHLUG-Org/RHLUG-Meeting-JSON/master/rest.json';
$.getJSON(url, function(data){
    $("#meeting").html("Next Meeting: " + data.date + " "+ data.numeric_date+ " from " + data.time);
    $("#meeting_location").html(data.location);
});
