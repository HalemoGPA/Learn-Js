let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/HalemoGPA/repos", true);
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let jsData = JSON.parse(this.responseText);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i]["full_name"]);
      div.append(repoName);
      document.body.append(div);
    }
  }
};
