var username = "";
var password = "";

var pedestrians = 0;
var vehicles = 0;
var weather = "sunny";

function load(){
	loadAuthentication();
	loadEnvironmentVariables();
}

//load this function 
function loadAuthentication(){
	$.getJSON( "authentication.json", function( data ) {
	var items = [];
	$.each( data, function( key, val ) {
		console.log(key);
		console.log(val);
		if (key == "username"){
			username = val;
		} else {
			password = val;
		}
	});
	});
	loadEnvironmentVariables();
}

function loadEnvironmentVariables(){
	$.getJSON( "environment.json", function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			//console.log(key,val);
			//console.log(val);
			if (key == "pedestrians"){
				pedestrians = val;
			} else if (key == "vehicles") {
				vehicles = val;
			} else {
				weather = val;
			}
		});
		console.log("JSON is extracted");
	});

	
}

function login(in_username, in_password){
	if (username == in_username && password == in_password){
		return true;
	} else {
		return false;
	}
}

function getUsername(){
	return username;
}

function getPassword(){
	return password;
}

function getUsernamePassword(){
	console.log(getUsername());
	console.log(getPassword());
}

function getPedestrian(){
	return pedestrians;
}

function getVehicle(){
	return vehicles;
}

function getEnvironment(){
	return weather;
}

function setPedestrians(num){
	pedestrians = num;
}

function setVehicles(num){
	vehicles = num;
}

function setWeather(mood){
	console.log(mood);
	weather = mood;
}

function storeEnvironments(){
	myObj = {
		  	"pedestrians": pedestrians,
		  	"vehicles": vehicles,
		  	"environment": weather
		  };

	return $.ajax({
		type: "GET",
		url: "environments.php",
		data: myObj,
		dataType: "json",
	});

	console.log(myObj);			
}

function showAllEnvironment(){
	console.log(pedestrians);
	console.log(vehicles);
	console.log(weather);
}

load();


