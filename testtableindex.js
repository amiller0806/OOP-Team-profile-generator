import Engineer from '/engineer.js';
import Manager from '/manager.js';
import Intern from 'intern.js';

function tableData(teamData) {



  const tableRows = teamData.map((response) => {


      if (response.getRole() === "Manager") {
        return (
          `<div class="card" style="width: 18rem;">
        <div class="card-body bg-primary text-white">
          <h5 class="card-title">${response.name}</h5>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">id:${response.id}</li>
          <li class="list-group-item">email:<a href="mailto:${response.email}">${response.email}</a></li>
          <li class="list-group-item">Office Number:${response.officeNumber}</li>
        </ul>
      </div>`)
      } else if (response.getRole() === "Intern") {
        return (
          `<div class="card" style="width: 18rem;">
          <div class="card-body bg-primary text-white">
            <h5 class="card-title">${response.name}</h5>
            <p class="card-text">Intern</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">id:${response.id}</li>
            <li class="list-group-item">email:<a href="mailto:${response.email}">${response.email}</a></li>
            <li class="list-group-item">School:${response.school}</li>
          </ul>
        </div>`)
      } else {
        return (
          `<div class="card" style="width: 18rem;">
              <div class="card-body bg-primary text-white">
                <h5 class="card-title">${response.name}</h5>
                <p class="card-text">Engineer</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">id:${response.id}</li>
                <li class="list-group-item">email:<a href="mailto:${response.email}">${response.email}</a></li>
                <li class="list-group-item">Github:${response.github}</li>
              </ul>
            </div>`)

      }

      })
      return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Bootstrap demo</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        </head>
        <body>
          <header class = "bg-danger text-center text-white">
          <h1>My Teams</h1>
          </header>
          ${tableRows}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        </body>
      </html>`
    
    };

    module.exports = tableData;