let request = new XMLHttpRequest();
request.open("GET", "./articles.json", true);
request.send();
request.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    console.log(request.responseText);
    console.log("Data Loaded");
  }
};
