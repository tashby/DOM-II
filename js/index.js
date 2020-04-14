// Your code goes here


//header
const funBusHeader = document.querySelector('.intro h2');

funBusHeader.addEventListener('mouseover', function(){
    funBusHeader.style.color = 'blue';
});

funBusHeader.addEventListener('mouseout', function(){
    funBusHeader.style.color = 'black';
});

//Paragraphs
window.addEventListener('keypress', function(x){
    let funBusParagraphs = document.querySelector('.content-section')
    funBusParagraphs.style.color = 'red';
    });

    window.addEventListener('click', function(x){
            let funBusParagraphs = document.querySelector('.content-section')
            funBusParagraphs.style.color = 'yellow';
            });

            window.addEventListener('dblclick', function(x){
                let funBusParagraphs = document.querySelector('.content-section')
                funBusParagraphs.style.color = 'green';
                });

                window.addEventListener('resize', function(x){
                    let titleOfPage = document.querySelector('.logo-heading')
                    titleOfPage.style.color = 'purple';
                    });
                    window.addEventListener('scroll', function(x){
                        let titleOfPage = document.querySelector('.logo-heading')
                        titleOfPage.style.color = 'orange';
                        });
//Image
const imageChange = document.querySelector('.intro img');

imageChange.addEventListener('mousemove', function(){
    imageChange.src = "img/destination.jpg"
});
imageChange.addEventListener('mouseleave', function(){
    imageChange.src = "img/fun-bus.jpg"
});

//Alerts
window.addEventListener('contextmenu', function(x){
alert('RIGHT CLICK')
});


window.addEventListener('copy', function(x){
    alert(`COPIED TO CLIPBOARD`)
});

window.addEventListener('load', function(){
window.prompt('Enter Your Email for our Mailing List');
});


//preventDefault
const preventDefAndProp = document.querySelectorAll('a');

preventDefAndProp.forEach(function(a){
    a.addEventListener('click', function(event){
        event.preventDefault();
        event.stopPropagation();
    });
});
