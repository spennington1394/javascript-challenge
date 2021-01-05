var tableData = data;

var tbody = d3.select("tbody");


tableData.forEach(function(ufoSighting) {
    // console.log(ufoSighting);
    
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
      // console.log(key,value);
    
      var cell = row.append("td");
      cell.text(value);
    });
  });



var button = d3.select("#filter-btn");
button.on("click", function() {
     
    tbody.html("");

    var inputDate = d3.select("#datetime");
    
    var userValue = inputDate.property("value");
    
    // console.log(userValue);
    
    var filteredData = tableData.filter(sighting => sighting.datetime === userValue);
    
    //console.log(filteredData);


    filteredData.forEach(function(selections) {

    //console.log(selections);
    
    var row = tbody.append("tr");
    
    Object.entries(selections).forEach(function([key, value]) {
        //console.log(key, value);
        
        var cell = row.append("td");
        cell.text(value);
    });
});
});