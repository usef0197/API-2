getData(); 

function getData() {
  
  var url = "https://calendarific.com/api/v2/countries?api_key=f913c62ee54abdcf08005a3028ad15541f11d442";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url); 

  
  xhr.onreadystatechange = function () {
    
    if (xhr.readyState === 4 && xhr.status === 200) { 
    
    
    	
        document.getElementById("myTable").innerHTML="<tr> <th scope='col'>#</th> <th scope='col'>Country name</th> <th scope='col'>ISO 3166</th> <th scope='col'>Total holidays</th> <th scope='col'>Supported languages</th> </tr>";
        
        
        var data = JSON.parse(xhr.responseText);

		

		
        data.response.countries.forEach((country,index) => {
        

          
          document.getElementById("myTable").innerHTML+="<tr> <td scope='row'>"+(index+1)+"</td> <td>"+country["country_name"]+"</td> <td>"+country["iso-3166"]+"</td> <td>"+country["total_holidays"]+"</td> <td>"+country["supported_languages"]+"</td> </tr>";
          
        }) ;

    }};

  
  xhr.send();
}