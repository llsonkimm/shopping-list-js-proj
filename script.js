
const form = document.querySelector('.new-items');

const newItem =  document.querySelector('.new-item');

const submit = document.querySelector('.btn-submit')

const ul = document.querySelector('.listed-items')

const filter = document.querySelector('.filter')

const clear = document.querySelector('.clear-btn')

const itemlist = ul.querySelectorAll('li');

const listsUL = document.querySelector('.lists')


function addItem(e) {
    e.preventDefault();

    const itemValue = newItem.value;

    if(itemValue === ''){
        alert('Please Add an Item');

    } else {
        
            const li = document.createElement('li')
            li.className = 'item';

            const p = document.createElement('p')
            p.innerText = itemValue;
            
            const icon = createIcon('fa-solid fa-circle-xmark');
            

            li.appendChild(p)
            li.appendChild(icon);

            ul.appendChild(li);  

           listsUL.style.display = 'block';
           removeUL()
    } 

    newItem.value = '';
    
}


function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}


function removeItem(e){
    
    if (e.target.classList.contains('fa-solid')){ 
         e.target.parentElement.remove();
    }

    removeUL();
}


function filteredItem(e){

    e.preventDefault();

    const filt = document.querySelector('.filtering');

    const text = filt.value.toLowerCase();
    

    const lists = Array.from(ul.children);

    for(let list of lists){
        let words = list.textContent.toLowerCase();

        if(words.indexOf(text) !== -1){
            list.style.display = 'flex';
        }
        else {
            list.style.display = 'none';
           }
    }
}

function removeUL() {
 
    let ulList = Array.from(ul.children)
    if(ulList.length === 0){
        clear.style.display = 'none'
        listsUL.style.display = 'none'
        filter.style.display = 'none'
    } else {
        clear.style.display = 'block'
        listsUL.style.display = 'block'
        filter.style.display = 'block'
    }

}



function clearBtn(){
  
    listsUL.style.display = 'none'
    clear.style.display = 'none'
    filter.style.display = 'none'

}

// function displayUI(){

//         const form = document.createElement('form');
//         form.className = 'new-forms'

//         const div = document.createElement('div')
//         div.className = 

//         const input =  document.createElement('input');
//         input.className = 'new-item'

//         const submit = document.createElement('.btn-submit')

//         const ul = document.createElement('.listed-items')

//         const filter = document.createElement('.filter')

//         const clear = document.createElement('.clear-btn')

//         const itemlist = ul.createElementAll('li');

//         const listsUL = document.createElement('.lists')
//         clear.style.display = 'block'
//         listsUL.style.display = 'block'
//         filter.style.display = 'block'
// }

form.addEventListener('submit', addItem)
ul.addEventListener('click', removeItem)
filter.addEventListener('keyup', filteredItem)
clear.addEventListener('click', clearBtn)



removeUL();
