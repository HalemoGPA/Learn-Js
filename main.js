// Footer
footer = document.createElement("footer");
footer.setAttribute("class", "footer");
footer.setAttribute(
  "style",
  "background-color:rgb(35,169,110);font-size:26px;text-align:center;padding:20px;color:rgb(255,255,255);"
);
footerText = document.createTextNode("Copyright 2021");
footer.appendChild(footerText);
document.body.prepend(footer);
/******************************************* */
// Body styling
document.body.setAttribute(
  "style",
  "background-color:rgb(236,236,236);margin:0;font-family:Tahoma,Arial;"
);

/******************************************* */
//Content
divContent = document.createElement("div").cloneNode(true);
divContent.setAttribute("class", "content");
divContent.setAttribute(
  "style",
  "display:flex;padding:20px;flex-wrap:wrap;justify-content:center;gap:20px;min-height:calc(100vh - 142px);box-sizing:border-box;"
);

//Product

for (let i = 0; i < 15; i++) {
  divProduct = document.createElement("div").cloneNode(true);
  divProduct.setAttribute("class", "product");
  divProduct.setAttribute(
    "style",
    "padding:20px;background-color:white;border:1px solid rgb(221,221,221);width:calc((100% - 40px) / 3);box-sizing:border-box;text-align:center;color:rgb(136,136,136);border-radius:6px;"
  );
  divProductSpan = document.createElement("span").cloneNode(true);
  divProductSpan.setAttribute("class", "product-span");
  divProductSpan.setAttribute(
    "style",
    "font-size:40px;color:black;font-weight:normal;display:block;margin-bottom:10px;margin-top:10px;"
  );
  divProductText = document.createTextNode("Product").cloneNode(true);
  divProduct.appendChild(divProductSpan);
  divProduct.appendChild(divProductText);
  let spantext = document.createTextNode(`${i + 1}`);
  divProductSpan.appendChild(spantext);
  divContent.appendChild(divProduct);
}
/*********************************** */
document.body.prepend(divContent);
/*********************************** */
// Header
header = document.createElement("header").cloneNode(true);
header.setAttribute("class", "website-head");
header.setAttribute(
  "style",
  "display:flex;padding:20px;background-color:white;justify-content:space-between;align-items:center;"
);
logo = document.createElement("div").cloneNode(true);
logo.setAttribute("class", "logo");
logo.setAttribute("title", "Website Logo");
logo.setAttribute(
  "style",
  "font-weight:bold;color:rgb(35,169,110);font-size:26px;"
);
logoText = document.createTextNode("Halemo GPA");
logo.appendChild(logoText);
header.appendChild(logo);
menu = document.createElement("ul").cloneNode(true);
menu.setAttribute("class", "menu");
menu.setAttribute("style", "display:flex;list-style:none;padding:0;margin:0;");
//Home
home = document.createElement("li").cloneNode(true);
home.setAttribute("class", "menu-item");
homeText = document.createTextNode("Home").cloneNode(true);
home.appendChild(homeText);
menu.appendChild(home);
// About
about = document.createElement("li").cloneNode(true);
about.setAttribute("class", "menu-item");
aboutText = document.createTextNode("About").cloneNode(true);
about.appendChild(aboutText);
menu.appendChild(about);
// Service
service = document.createElement("li").cloneNode(true);
service.setAttribute("class", "menu-item");
aboutText = document.createTextNode("Service").cloneNode(true);
service.appendChild(aboutText);
menu.appendChild(service);
//contact
contact = document.createElement("li").cloneNode(true);
contact.setAttribute("class", "menu-item");
contactText = document.createTextNode("Contact");
contact.appendChild(contactText);
menu.appendChild(contact);
header.appendChild(menu);
document.body.prepend(header);
lis = document.querySelectorAll("li");

lis.forEach((li) =>
  li.setAttribute(
    "style",
    "display:inline-block;padding:10px;color:rgb(136,136,136);font-size:16px;"
  )
);
