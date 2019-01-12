function buildCharts(Stocks) {
  
  // @TODO: Use `d3.json` to fetch the sample data for the plots
  // var url = `/samples/${sample}`;
  var url =`/data`;
  d3.json(url).then(function(data) {

    // @TODO: Build a Bubble Chart using the sample data
    // var x_values = data.otu_ids;
    // var y_values = data.sample_values;
    // var marker_size = data.sample_values;
    // var marker_colors = data.otu_ids; 
    // var text_values = data.otu_labels;

    var trace1 = {
      x: x_values,
      y: y_values,
      text: text_values,
      mode: 'markers',
      marker: {
        color: marker_colors,
        size: marker_size
      } 
    };
  
    var data = [trace1];

    var layout = {
      // xaxis: { title: "OTU ID"},
    };

    Plotly.newPlot('bubble', data, layout);


// then the data response
// build some plotly plots
function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("/sectors").then((sectorNames) => {
      sectorNames.forEach((Sector) => {
        selector
          .append("option")
          .text(Sector)
          .property("value", Sector);
      });
  
      // Use the first sample from the list to build the initial plots
      const firstSector = sectorNames[0];
      buildCharts(firstSector);
      buildMetadata(firstSector);
    });
  }
  
  function optionChanged(newSector) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSector);
    buildMetadata(newSector);
  }
  
  // Initialize the dashboard
  init();

  console.log("HEY I AM RUNNING THIS IS APP DOT JS")