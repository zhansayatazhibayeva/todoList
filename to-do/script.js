
var btn = document.querySelector('#add-task');

var todoList = document.querySelector('.todo-list');

btn.addEventListener('click',function(){
    const newTask = document.createElement('li');

    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';

    const newLabel = document.createElement('label');
    const taskText = document.getElementById('new-task').value.trim();
    document.getElementById('new-task').value = "";

    newLabel.textContent = taskText;

    newTask.appendChild(newCheckbox);
    newTask.appendChild(newLabel);

    todoList.appendChild(newTask);

    newCheckbox.addEventListener('change',function(){
        if(this.checked){
            this.parentElement.style.textDecoration = 'line-through';
        }
        else{
            this.parentElement.style.textDecoration = "none";
        }
    });

});