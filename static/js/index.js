var tdata = data;

// console.log(tdata);

// Get a reference to the table body
var tbody = d3.select("tbody");

 
var clickedButton = d3.select("#filter-btn");


clickedButton.on("click", function() {
  
 tbody.html("");
  

  var textboxDate = d3.select("#datetime").node().value;
  var textboxCity = d3.select("#city").node().value;
  var textboxState = d3.select("#state").node().value;
  var textboxCountry = d3.select("#country").node().value;
  var textboxShape = d3.select("#shape").node().value;



  var inputDate = textboxDate; 
  var inputCity = textboxCity.toLowerCase(); 
  var inputState = textboxState.toLowerCase(); 
  var inputCountry = textboxCountry.toLowerCase(); 
  var inputShape = textboxShape.toLowerCase(); 
 


  
  var outputData = tdata
  
  if (inputDate.length > 0) {
    outputData = outputData.filter(x => x.datetime === inputDate);
  }
  if (inputCity.length > 0) {
    outputData = outputData.filter(x => x.city === inputCity);
  }
  if (inputState.length > 0) {
    outputData = outputData.filter(x => x.state === inputState);
  }
  if (inputCountry.length > 0) {
    outputData = outputData.filter(x => x.country === inputCountry);
  }
  if (inputShape.length > 0) {
    outputData = outputData.filter(x => x.shape === inputShape);
  }


  outputData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



});