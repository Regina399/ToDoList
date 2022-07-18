document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').
    value.length == 0){
        alert("Пожалуйста введите задачу!")
    }
    else{
        document.querySelector('#tasks').innerHTML
        +=`
        <div class ="task">
        <span id="taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
            <img src="1497559425-delete_84991.svg">
        </button>
        </div>
        `;

        document.querySelector('#newtask input').value= "";


        var current_tasks = document.querySelectorAll(".delete");
        for(var i = 0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
            }

        var tasks = document.querySelectorAll(".tasks");
        for( var i=0; i<tasks.lenght; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('.completed');
            }
        }
}
}
