const accordion=document.getElementsByClassName('content-container')
for (let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        console.log(`accordion ${i+1} clicked`)
        this.classList.toggle('active')
    })
}