var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    // console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Each UFO Sighting value for column
    Object.entries(ufoSighting).forEach(function([key, value]) {
      // console.log(key,value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
    //table body to html 
    tbody.html("");

    // Select the input date from index.html
    var inputDate = d3.select("#datetime");
    // Get the value property of the inputDate
    var userValue = inputDate.property("value");
    // console.log user value
    // console.log(userValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === userValue);
    // console.log filter values
    //console.log(filteredData);


    filteredData.forEach(function(selections) {

    //console.log(selections);
    // Append variable `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Each UFO Sighting value for column
    Object.entries(selections).forEach(function([key, value]) {
        //console.log(key, value);
        // Append a cell to the row for each value in 
        var cell = row.append("td");
        cell.text(value);
    });
});
});