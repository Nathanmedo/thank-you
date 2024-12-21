

const block = document.querySelectorAll('.block');
const info = document.querySelector('.info');

console.log(block);


block.forEach(block => {
    block.addEventListener('click', ()=>{
        info.classList.toggle('active');
    })
})