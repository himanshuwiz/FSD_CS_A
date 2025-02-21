
const btn1 = document.createElement('button');
btn1.id = 'btn-1';
btn1.className = 'btn';
btn1.style.color = 'white';
btn1.style.backgroundColor = 'blue';
btn1.textContent = 'Click me for paragraph';
document.body.appendChild(btn1);

btn1.addEventListener('click', () => {
    const para = document.createElement('p');
    para.id = 'para-1';
    para.className = 'para';
    para.style.color = 'red';
    para.style.backgroundColor = 'yellow';
    para.textContent = 'This is a paragraph';
    document.body.appendChild(para);
});

const btn2 = document.createElement('button');
btn2.id = 'btn-2';
btn2.className = 'btn';
btn2.style.color = 'black';
btn2.style.backgroundColor = 'yellow';
btn2.textContent = 'Click me for list';
document.body.appendChild(btn2);

const list = document.createElement('ul');
list.id = 'list-1';
list.className = 'list';
list.style.color = 'blue';
list.style.backgroundColor = 'green';
document.body.appendChild(list);

btn2.addEventListener('click', () => {
    const item = document.createElement('li');
    item.id = 'item-1';
    item.className = 'item';
    item.style.color = 'purple';
    item.style.backgroundColor = 'orange';
    item.textContent = 'This is a list item';
    list.appendChild(item);
});