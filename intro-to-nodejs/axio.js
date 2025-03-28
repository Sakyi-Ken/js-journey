const axios = require('axios');

axios.get('<http://jsonplaceholder.typicode.com/posts>')
  .then(function (response) {
    console.log(response.data);
  })
    .catch(function (error) {
      console.log(error);
    })