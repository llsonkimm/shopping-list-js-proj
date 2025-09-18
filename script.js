const form = document.querySelector('.new-items');

const newItem =  document.querySelector('.new-item');
newItem.innerText = '';

const submit = document.querySelector('.btn-submit')

const ul = document.querySelector('.listed-items')


function addItem(e) {
    e.preventDefault();

    const itemValue = newItem.value;

    console.log(itemValue);

    if(itemValue === ''){
        alert('Please Add an Item');
        return;
    } else {
        
    const li = document.createElement('li')
    li.className = 'item';

    const p = document.createElement('p')
    p.innerText = itemValue;
    
    const icon = createIcon('fa-solid fa-circle-xmark');
    

    li.appendChild(p)
    li.appendChild(icon);

    ul.appendChild(li);

    
    }
    newItem.value = '';
    
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


form.addEventListener('submit', addItem)
