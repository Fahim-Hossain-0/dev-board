// alert()
const buttons = document.querySelectorAll('.completed-btn')
const titles = document.querySelectorAll('.title')

// function title(){
//     document.querySelectorAll('.title')
    
// }

let counts = 0

for(const button of buttons){
    button.addEventListener('click',function(event){
        
        if(event){
            alert('Task is complete')
            
            event.target.disabled = true;

        event.target.classList.add('opacity-15')
       
       
            
            event.target.style.cursor = 'default';
            
            for(const title of titles){
                title.
            }   
       
            document.getElementById('task').innerText --
            document.getElementById('checkbox-number').innerText ++
            const logActivity=document.getElementById('log-activity')
            const p = document.createElement('p')
            p.innerHTML=`                    <p class="opacity-[.7] p-4 bg-[#Fp4F7FF] my-3">You have Complete The Task Add Dark Mode at ${date}</p>`
              logActivity.appendChild(p)     
       
          }
          
          counts++
        if(counts>=6){
            alert("congruence you're all task is finished")
        }

    })
}



document.getElementById('clear-history').addEventListener('click',function(){
    document.getElementById('log-activity').innerText = ''

})

const divElem = document.getElementById("body");
        function randomcolor() {
            return Math.floor(Math.random() * 255);
        }
        document.getElementById('color-theme').addEventListener('click', () => {
            divElem.style.backgroundColor = 'rgba('
                + randomcolor() + ',' + randomcolor()
                + ',' + randomcolor() + '\)'})


   
