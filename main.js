$(document).ready(function(){


	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/group?id=5128581,6542283,1819730&units=imperial&appid=2bfa6096aa8622457f9d8f03c4156ebd",
		type: "GET", 
		dataType:"JSON",


		// data:{
			// q:"New York",
			// units:"imperial",
			// appid: "2bfa6096aa8622457f9d8f03c4156ebd",
		// },

		success:function(data) {
			console.log(data);
			console.log(data.list[0].main.temp);

			// New York
			$("#1").click(function(){
				$("#currentTemp").html("The temperature in New York is: " + data.list[0].main.temp + " degrees!");
				$("#currentWeather").html(data.list[0].weather[0].main);
				if (data.list[0].weather[0].main== "Clouds"){
					$("#cloud").toggle()
				}
				if (data.list[0].weather[0].main== "Fog"){
					$("#fog").toggle()
				}
				if (data.list[0].weather[0].main== "Clear"){
					$("#clear").toggle()
				}
				if (data.list[0].weather[0].main== "Rain"){
					$("#rain").toggle()
				}				
				if (data.list[0].weather[0].main== "Snow"){
					$("#snow").toggle()
				}
				if (data.list[0].weather[0].main== "Mist"){
					$("#mist").toggle()
				}
				if (data.list[0].weather[0].main== "Thunderstorm"){
					$("#thunderstorm").toggle()
				}
			});
				// Milan
			$("#2").click(function(){
				$("#currentTemp").html("The temperature in Milan is: " + data.list[1].main.temp + " degrees!");
				$("#currentWeather").html(data.list[1].weather[0].main);
				if (data.list[1].weather[0].main== "Clouds"){
				$("#cloud").toggle()
				}
				if (data.list[1].weather[0].main== "Fog"){
					$("#fog").toggle()
				}
				if (data.list[1].weather[0].main== "Clear"){
					$("#clear").toggle()
				}
				if (data.list[1].weather[0].main== "Rain"){
					$("#rain").toggle()
				}				
				if (data.list[1].weather[0].main== "Snow"){
					$("#snow").toggle()
				}
				if (data.list[1].weather[0].main== "Mist"){
					$("#mist").toggle()
				}
				if (data.list[1].weather[0].main== "Thunderstorm"){
					$("#thunderstorm").toggle()
				}
			})

			// Hong Kong
			$("#3").click(function(){
				$("#currentTemp").html("The temperature in Hong Kong is: " + data.list[2].main.temp + " degrees!");
				$("#currentWeather").html(data.list[2].weather[0].main);

				if (data.list[2].weather[0].main== "Clouds"){
				$("#cloud").toggle()
				}
				if (data.list[2].weather[0].main== "Clear"){
					$("#clear").toggle()
				}
				if (data.list[2].weather[0].main== "Rain"){
					$("#rain").toggle()
				}				
				if (data.list[2].weather[0].main== "Snow"){
					$("#snow").toggle()
				}
				if (data.list[2].weather[0].main== "Mist"){
					$("#mist").toggle()
				}
				if (data.list[2].weather[0].main== "Thunderstorm"){
					$("#thunderstorm").toggle()
				}
			})
				
		},
		error:function(data,textStatus, errorThrown){
			console.log("welp you tried");
			console.log(errorThrown);
		},

	})
})