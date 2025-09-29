const container = document.querySelector('.container')
const newItem = document.querySelector('.new-item');
const addBtn = document.getElementById('add-btn');
const form = document.querySelector('.filter')
const filtering = document.querySelector('.filtering');
const lists = document.querySelector('.lists');
const ul = document.querySelector('ul');
const clear = document.getElementById('clearer');
let editMode = false;



function displayItems(){
    const ItemsfromStorage = getitemsFromStorage();

    ItemsfromStorage.forEach(item =>{
        addItemtoDom(item);
        
    })
    checkUI();
}


function addNewItem(e) {
    e.preventDefault();

    const newEl = newItem.value;

    if(newEl === ''){
        alert('Please Add an Item')
        return;
    }
    if(editMode) {
        const editEl = ul.qu
    }
    addItemtoDom(newEl);
    addItemToStorage(newEl);

    
    checkUI()

    newItem.value = '';

}

function addItemtoDom(item) {

    const li = document.createElement('li');
    
    li.className = 'item';

    const p = document.createElement('p');
    p.innerText = item;
    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-circle-xmark';
    li.appendChild(p);
    li.appendChild(icon); 
    ul.appendChild(li);

}

function addItemToStorage(item) {
    
    const ItemsfromStorage = getitemsFromStorage()
    
    ItemsfromStorage.push(item);

    localStorage.setItem('items', JSON.stringify(ItemsfromStorage))
}


function getitemsFromStorage(){

    let ItemsfromStorage;

    if(localStorage.getItem('items') === null){
        ItemsfromStorage = [];
    } else{
        ItemsfromStorage = JSON.parse(localStorage.getItem('items'))
    }

    return ItemsfromStorage;
}


function onClick(e){
    if(e.target.nodeName === 'I') {
        deleteItem(e.target.parentElement); 
        return;
    } if(e.target.nodeName === 'P'){
        editItem(e.target.parentElement);
    }

}


function editItem(item){
    editMode = true;
    ul.querySelectorAll('li').forEach(i => {
        i.classList.remove('edit-mode');
    })
    item.classList.add('edit-mode');
    newItem.value = item.textContent;
}

function deleteItem(item) {
        item.remove();
        removeFromStorage(item.firstElementChild.textContent);
        checkUI();
}

function removeFromStorage(item){
    let ItemsfromStorage = getitemsFromStorage();

    ItemsfromStorage = ItemsfromStorage.filter(i => i !== item)

    localStorage.setItem('items', JSON.stringify(ItemsfromStorage))

    return ItemsfromStorage;
}

function clearItems() {
    
    while(ul.firstElementChild){
        ul.removeChild(ul.firstElementChild);
    }

    localStorage.removeItem('items');

    checkUI()

}

function filterItems(e){
    e.preventDefault();

    const li = ul.querySelectorAll('li');


    const text = e.target.value.toLowerCase();

    li.forEach(item => {
        const textEl = item.firstElementChild.innerText.toLowerCase();
        console.log(textEl)
        if(textEl.indexOf(text) !== -1){
            item.style.display = 'flex';
        } else{
            item.style.display = 'none';
        }
    })

    // console.log(li);
}


function checkUI(){
    const li = ul.querySelectorAll('li');
    // console.log(Array.from(ul.children));
    if(li.length === 0){
        form.style.display = 'none';
        lists.style.display = 'none';
        clear.style.display = 'none';
        // localStorage.removeItem('items')
    } else {
        lists.style.display = 'block';
        form.style.display = 'block';
        clear.style.display = 'block';
    }

}

function initApp(){
    addBtn.addEventListener('click', addNewItem);
    ul.addEventListener('click', onClick)
    clear.addEventListener('click', clearItems)
    form.addEventListener('input', filterItems)
    document.addEventListener('DOMContentLoaded', displayItems)

    checkUI()
}
initApp()
