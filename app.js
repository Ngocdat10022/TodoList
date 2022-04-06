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
            text:val,
            status:'comleted'
        })
        addTodos({
            text:val
        })
    }
})
function addTodos(todo) {
    let li = document.createElement('li')
    li.innerHTML = `<span>${todo.text}</span> 
                    <i class="fa-solid fa-trash-can"></i>
                    `
     li.setAttribute('class',todo.status)
     console.log(li);
    todos.appendChild(li)
    // todos.innerHTML = ` <li class="${todo.status}">
    //                         <span>${todo.text}</span>
    //                         <i class="fa-solid fa-trash-can"></i>
    //                     </li>
    //                     `
}