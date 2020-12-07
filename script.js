$(window).on("load",function(){

    let slideIndex  =$(".slide.active").index();
    const slideLength = $(".slide").length;

    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex == slideLength-1){
            slideIndex = 0;
        }else{
            slideIndex++;
        }
        
        setTimeout(slideShow,5000);
    }

    slideShow();  
});


// on scroll
$(window).scroll(function(){
    if($(window).scrollTop() > 0){
        $(".header").addClass("sticky");
    }else{
        $(".header").removeClass("sticky");
    }
});
window.onload=function(){
   document.getElementById("open-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active1");

    document.getElementById("description").innerHTML =  "Thank you, " + document.getElementById("contname").value + " for your message.<br>We appreciate it.";
    document.getElementById("contname").value = "";
    document.getElementById("contemail").value = "";
    document.getElementById("contmessage").value = "";
      });

   document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active1");

   });
  }
    
   
  
/*google maps */
  function initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 10,
        center: {lat: 40.71177769996586, lng:-74.09191864026273},
    };

    var myMap = new google.maps.Map(element, options);
    addMarker({
       coordinates: {lat: 40.73281439564461, lng:-74.1787291992532},
       info: '<img src="https://i2.wp.com/pointofsale.com/wp-content/uploads/2019/07/PointofSale-outside-restaurant-food-service-licenses-01.jpg?fit=200%2C200&ssl=1"><br><h1>Visit</h1><h3>Rosa restaurant</h3>'
       ,image: "marker.png"
    });
    addMarker({
       coordinates: {lat: 40.71177769996586, lng:-74.09191864026273},
       info: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GQFd_52Jls7Giwajbqf4k6IG9XXy8jVpQg&usqp=CAU"><br><h1>Visit</h1><h3>Rosa restaurant</h3>'
       ,image: "marker.png"
    });
    addMarker({
       coordinates: {lat: 40.71930379244182, lng: -73.81771441314689},
       info: '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdOtPIory8cbXkBvnBoxc6rz0_sQ9Q-kWUaA&usqp=CAU"><br><h1>Visit</h1><h3>Rosa restaurant</h3>'
       ,image: "marker.png"
    });
    
    
    function addMarker(properties){
        var marker = new google.maps.Marker({
        position: properties.coordinates,
        map: myMap,
        icon: properties.image
    });

        if(properties.info){
            var InfoWindow = new google.maps.InfoWindow({
            content: properties.info
            }); 
            marker.addListener('click', function(){
                InfoWindow.open(myMap, marker);
            });
        }

    }
    const flightPlanCoordinates = [
        { lat:40.75362034288807, lng: -74.20802579695217 },  
        { lat:40.678015699376246, lng: -74.11296370139445 },
        { lat: 40.66882749288662, lng: -73.80014316463169 },
        { lat: 40.792819121722324, lng:  -73.78072189676992 },
        { lat: 40.76083153951086, lng: -74.06475793848391 },
        { lat:40.75362034288807, lng: -74.20802579695217 },  
      ];
      const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      flightPath.setMap(myMap);
}



/*function big(element){
    element.style.fontSize = "17px";
}

function small(element){
    element.style.fontSize = "15px";
}*/


//contact
