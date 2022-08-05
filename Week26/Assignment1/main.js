let myPromise = new Promise((res, rej) => {
  let request = new XMLHttpRequest();
  request.open("GET", "./jsonObject.json");
  request.send();
  request.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      res(request.response);
    } else {
      rej(Error("Not Found"));
    }
  };
})
  .then((result) => {
    let myData = JSON.parse(result);
    myData.length = 5;
    return myData;
  })
  .then((result) => {
    for (let i = 0; i < result.length; i++) {
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      let h3Text = document.createTextNode(result[i].title);
      let pText = document.createTextNode(result[i].description);
      p.append(pText);
      h3.append(h3Text);
      div.append(h3, p);
      document.body.append(div);
    }
  });
