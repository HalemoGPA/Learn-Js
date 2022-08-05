let myData = fetch("./jsonObject.json");
myData
  .then((result) => {
    let data = result.json();
    return data;
  })
  .then((result) => {
    result.length = 5;
    return result;
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
