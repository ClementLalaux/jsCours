let header = document.createElement('header');

let h1 = document.createElement('h1');
h1.textContent = "h1";
let h2 = document.createElement('h2');
h2.textContent = "h2";

document.body.prepend(header);
header.append(h1);
header.append(h2);

