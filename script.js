fetch("./allData.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    document.getElementById("app").innerHTML = `
<h1 class = "app-title">${data[0]["title"]} Internship</h1>
${data
  .map(function (intern) {
    return `
    <div class = "main">
        <img class = "logo" src = "${intern["imgSrc"]}">
        <h2 class = "name">${intern["title"]}</h2>
        <div class = "detail">
        <p class = "info"><Strong>Company : ${intern["cName"]}</Strong></p>
        <p class = "info"><Strong>Location : ${intern["cLoc"]}</Strong></p>
        </div>
        <a href= ${intern["link"]} class="myButton">View More</a>

    </div>
    `;
  })
  .join("")}
`;
    // console.log(data[0]["title"]);
  });
