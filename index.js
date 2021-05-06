document.addEventListener('click',(test)=>{console.log(test)})


let changeHeader = () => {
    if (document.querySelector('h1').style.color === 'blue') {document.querySelector('h1').style.color = 'green'} else {
        document.querySelector('h1').style.color = 'blue'}
    }
document.addEventListener('keydown', (e) => {if (e.key === 'ArrowRight') 
{changeHeader()}})
console.log('heyyy')
console.log(document.getElementsByClassName('poo'))