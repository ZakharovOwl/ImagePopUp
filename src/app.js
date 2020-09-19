//Selectors 
//Event Listeners
//Functions
//localStorage

const modal = document.querySelector('.modal')
const previews = document.querySelectorAll('.gallery img')
const original = document.querySelector('.full-img')
const caption = document.querySelector('.caption')

previews.forEach(preview =>{
    preview.addEventListener('click', ()=> {
        modal.classList.add('open')
        original.classList.add('open')
        //text
        
        const originalSrc = preview.getAttribute('data-original');
        original.src = `./assets/full/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText; 
    })
})

modal.addEventListener('click', (e)=>{
    //не знаю, как убрать ошибку после нажатия на картинку
    if(e.target.classList.contains('full-img')){
        modal.classList.remove('open')
        original.classList.remove('open')
    } 
})