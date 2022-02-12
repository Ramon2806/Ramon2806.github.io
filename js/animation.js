const image= document.getElementById("title-img-animated");
const title= document.getElementsByClassName("title") [0];
const subtitle= document.getElementsByClassName("title-cite") [0];

image.addEventListener ('mousemove',function(event){
    this.style.backgroundPosition = `${event.pageX * -0.1}px ${event.pageY * -0.1}px`;
});

image.addEventListener ('mouseleave',function(event){
    this.style.backgroundPosition = "center center";
});



title.addEventListener ('mousemove',function(event){
    image.style.backgroundPosition = `${event.pageX * -0.1}px ${event.pageY * -0.1}px`;
    image.style.backgroundSize = "115% 115%";
});

subtitle.addEventListener ('mousemove',function(event){
    image.style.backgroundPosition = `${event.pageX * -0.1}px ${event.pageY * -0.1}px`;
    image.style.backgroundSize = "115% 115";
});
