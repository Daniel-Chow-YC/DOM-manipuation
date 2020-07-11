const container = document.querySelector('#container');

// Task 1
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Task 2
const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.classList.add('red');
p.style.color = 'red';

container.appendChild(p);


// Task 3
const h3 = document.createElement('h3');
h3.classList.add('blue');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);


// Task 4
const borderDiv = document.createElement('div');
borderDiv.classList.add('border');
borderDiv.style.background = 'pink';
borderDiv.style.border = "thick solid black";


const h1 = document.createElement("div");
h1.textContent = "I'm in a div";
borderDiv.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";
borderDiv.appendChild(p2);

container.appendChild(borderDiv);
