let request = new XMLHttpRequest();
request.open("GET", "./articles.json", true);
request.send();

request.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    //
    let mainData = JSON.parse(this.response);
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
    //
    let outerDiv = document.createElement("div");
    outerDiv.setAttribute("id", "data");
    for (let i = 0; i < mainData.length; i++) {
      let div = document.createElement("div");
      let h2 = document.createElement("h2");
      let h2Text = document.createTextNode(mainData[i].title);
      h2.append(h2Text);
      let p1 = document.createElement("p");
      let p1Text = document.createTextNode(mainData[i].description);
      p1.append(p1Text);
      let p2 = document.createElement("p");
      let p2Text = document.createTextNode(mainData[i].author);
      p2.append(p2Text);
      let p3 = document.createElement("p");
      let p3Text = document.createTextNode(mainData[i].category);
      p3.append(p3Text);
      div.append(h2, p1, p2, p3);
      outerDiv.append(div);
    }
    document.body.prepend(outerDiv);
  }
};
