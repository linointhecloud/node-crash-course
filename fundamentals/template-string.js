const name = 'Deadpool';
const real = 'Wade Winston Wilson';

const normal = 'My name is ' + name + ' and I am ' + real;
const template = `My name is ${name} and I am ${real}`;

console.log(normal);
console.log(template);

const html = `
<ul>
  <li>My name is ${name}</li>
  <li>I am ${real}</li>
</ul>`;

console.log(html);
