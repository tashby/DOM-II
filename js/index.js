// Your code goes here


//#1-4

const funBusHeader = document.querySelector('.intro h2');

funBusHeader.addEventListener('mouseover', function(){
    funBusHeader.style.color = 'blue';
});

funBusHeader.addEventListener('mouseout', function(){
    funBusHeader.style.color = 'black';
});


window.addEventListener('keypress', function(x){
    let funBusParagraphs = document.querySelector('.content-section')
    funBusParagraphs.style.color = 'red';
    });


//#7-10 are Prompts

window.addEventListener('contextmenu', function(x){
alert('RIGHT CLICK')
});


window.addEventListener('copy', function(x){
    alert(`COPIED TO CLIPBOARD`)
});

window.addEventListener('load', function(){
window.prompt('Enter Your Email for our Mailing List');
});
