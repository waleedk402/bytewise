let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let modalContainer = document.querySelector("#modal-container")
openBtn.addEventListener("click", function () {
    console.log('open button clicked')
    modalContainer.style.display='block'
})
closeBtn.addEventListener("click",function(){
    modalContainer.style.display='none'
})
window.addEventListener('click',function(e){
    if(e.target===modalContainer){
        modalContainer.style.display='none'
    }
})