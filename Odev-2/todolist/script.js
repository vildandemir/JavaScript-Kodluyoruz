const input = document.querySelector("#task");
const submit = document.querySelector("#liveToastBtn");
const list = document.querySelector('#list');
const close = document.querySelector('.close');
const li = document.querySelector('li');
let items;

//load items
loadItems();

//call event listeners
eventListeners();

function eventListeners(){
    //submit event
    input.addEventListener('onlick',newElement);

    list.addEventListener('click',deleteItem);

    list.addEventListener('click',doneIt);
}

function loadItems(){

    items = getItemsFromLS();
    items.forEach(function(item){
        createItem(item);
    });
        
}

// get Items From Local Storage
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items=[];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

//set item to Local Storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

function createItem(text){
    

        //create li
        const li = document.createElement('li');
        li.innerHTML='<span class="close">×</span>';
        li.appendChild(document.createTextNode(text));


        //ad li to ul
        list.appendChild(li);
        
}

//add new element
function newElement(){

    if(input.value==='' || input.value===' '){
        $(".error").toast("show");
        
    }else{
        
        //create Item
        createItem(input.value);

        //save to LS
        setItemToLS(input.value);

        $(".success").toast("show");
    }

    //clear input
    input.value='';

}

//delete an item
function deleteItem(e){
    if(e.target.className==='close'){
        e.target.parentElement.remove();
    }

    e.preventDefault();
}

//done it
function doneIt(e){
 
    e.target.classList.toggle('checked');
 
    e.preventDefault();
}
