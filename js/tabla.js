
const elements = document.getElementsByTagName('tr');

for (let i=1; i<elements.length; i++) {
    elements [i].addEventListener('mouseover', function(){
        this.classList.add('destacar');
    });

    elements [i].addEventListener('mouseout', function(){
        this.classList.remove('destacar');
    });
}