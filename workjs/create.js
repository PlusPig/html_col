var textw = document.createElement("nav");
var text = document.createElement("p");
var content = document.createTextNode("create text");
var id = document.createAttribute("id");
id.value = "root";
//append将内容或者子元素放到容器中
text.appendChild(content);
text.setAttributeNode(id);
console.log(text);

var container = document.getElementById("container");
container.appendChild(text);