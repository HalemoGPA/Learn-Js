let request = new XMLHttpRequest();
request.open("GET", "./articles.json", true);
request.send();

request.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    let mainData = JSON.parse(this.response);
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};
