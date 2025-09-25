const container = document.querySelector('.container')

const newItem = document.querySelector('.new-item');

const addBtn = document.getElementById('add-btn');

const form = document.querySelector('.filter')

const filtering = document.querySelector('.filtering');

const lists = document.querySelector('.lists');

const ul = document.querySelector('ul');

const li = ul.querySelectorAll('li');

const clear = document.getElementById('clearer');




function addNewItem(e) {

    e.preventDefault();

    const newEl = newItem.value;

    const li = document.createElement('li');
    li.className = 'item';

    const p = document.createElement('p');
    p.innerText = newEl;
    

    const icon = document.createElement('i')
    icon.className = 'fa-solid fa-circle-xmark';

    if(p.innerText === ''){
        alert('Please Add an Item')
    } if(!clearItems) {

    li.appendChild(p);
    li.appendChild(icon);
    ul.appendChild(li);

    }
    else{
        createForm();
        createLists();
        createBtn();
    }
    newItem.value = ''

}



function deleteItem(e) {
    if(e.target.nodeName === 'I') {
        e.target.parentElement.remove();
    } if(Array.from(ul.children).length === 0) {
        clearItems()
    }
}

function clearItems(e) {
    
    function removeLists() {
    form.remove();
    lists.remove();
    clear.remove();
}
removeLists()
}

function createForm() {
    const form = document.createElement('form');
    form.className = 'filter';

    form.innerHTML = `<h4>Filter Items</h4>
            <div class="filtered">
                <input type="text" class="filtering" placeholder="Filter Items">
            </div>`
    
    container.appendChild(form)
}

function createLists() {
    const div = document.createElement('div');
    div.className = 'lists';

    div.innerHTML = `
        <h4>Listed Items</h4>
        <ul class="listed-items">
        </ul>
        </div>`
    container.appendChild(div)
}

function createBtn () {
    const btn = document.createElement('button');
    btn.id = 'clearer';
    btn.className = 'clear-btn';
    btn.textContent = 'Clear All';

    container.appendChild(btn)
}




addBtn.addEventListener('click', addNewItem);
ul.addEventListener('click', deleteItem)
clear.addEventListener('click', clearItems)

