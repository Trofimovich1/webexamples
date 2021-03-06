// (DUNG TRONG MINH HOA)

// Get information of Employee 123:
fetch("http://example.com/employee?id=123")
  .then(function(response) {
      console.log("OK! Server returns a response object:");
      console.log(response);

      if(!response.ok) {
         throw new Error("HTTP error, status = " + response.status);
      }

      // Error if Employee 123 does not exist.
      // (*** URL returns null).
      var myJSON_promise = response.json(); // =====> Error
      return myJSON_promise;
  })
  .then(function(myJSON) {
      console.log("OK! JSON:");
      console.log(myJSON);
  })
  .catch(function(error)  {
      console.log("Noooooo! Something error:");
      console.log(error);
  });
