// Update the GET route for the index
app.get('/', function (request, response) {
    // Extract filter parameters from query string
    const { name } = request.query;
  
    // Fetch all persons from the API
    fetchJson(apiUrl + '/person').then((apiData) => {
      let filteredData = apiData.data;
  
      // Filter data based on name parameter
      if (name) {
        filteredData = filteredData.filter(person => person.name.toLowerCase().includes(name.toLowerCase()));
      }
  
      // Render index.ejs with filtered data and squads
      response.render('index', { persons: filteredData, squads: squadData.data });
    });
  });
  