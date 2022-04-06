const input = document.querySelector('input')
const btn = document.querySelector('button')
const form = document.querySelector('form')
const todos =  document.querySelector('.todo')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let val = input.value.trim();
    console.log(input.value);
    if(val){
        addTodos({
            text:val
        })
    }
    else{
        alert('không có dữ liệu')
    }
    input.value = ' '
    saveLocalstorage();
})
function addTodos(todo) {
    let li = document.createElement('li')
    li.innerHTML = `<span>${todo.text}</span> 
                    <i class="fa-solid fa-trash-can"></i>
                    `

    if(todo.status === 'completed'){
        li.setAttribute('class',todo.status)
    }
    li.addEventListener('click',function(){
        this.classList.toggle('completed')
        saveLocalstorage()
    })
    li.querySelector('i').addEventListener('click',function(){
        console.log(this.parentElement.nodeType);
        this.parentElement.remove()
        saveLocalstorage()
    })
    todos.appendChild(li)
}

// save localstorage

function saveLocalstorage() {
    let itemTodo = document.querySelectorAll('li');
    let todoStorage = []
     itemTodo.forEach((item)=>{
        let text = item.querySelector('span').innerText;
        let status = item.querySelector('span').getAttribute('class')
        todoStorage.push({
            text,
            status
        })
    })
    localStorage.setItem('todoList',JSON.stringify(todoStorage))
    // console.log(JSON.parse( localStorage.getItem('todoList')));
 }

 function init() {
     let data = JSON.parse( localStorage.getItem('todoList'))
    data.forEach(function(item){
        addTodos(item)
    })
 }

 init();