// alert()
const buttons = document.querySelectorAll('.completed-btn')
for(const button of buttons){
    button.addEventListener('click',function(event){
        if(event){
            alert('button click!')
            // event.target.alert('ok')
            event.target.disabled = true;

        event.target.classList.add('opacity-15')
        // event.target.classList.add('opacity-15');
       
            
            event.target.style.cursor = 'default';
            
       
       
            document.getElementById('task').innerText --
            document.getElementById('checkbox-number').innerText ++
            
       
          }
    })
}


   
