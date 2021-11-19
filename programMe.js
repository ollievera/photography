var Photos =  [
    { 
    id: 1 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Me/1.jpg'
},

{ 
    id: 2 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Me/2.jpg'
},

{
    id: 3 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Me/3.jpg'

},
    { 
    id: 4 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Me/4.jpg'
},

{ 
    id: 5 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Me/5.jpg'
}

  ]

var numberCounter = 0;

window.addEventListener('DOMContentLoaded', function(){
    load()
});


function load() {
    
    var pic = document.getElementById('photoMe');
        
        pic.src = Photos[numberCounter].src;
        
    
}
    
function addMe(){
    
    var pic = document.getElementById('photoMe');
    numberCounter = numberCounter + 1;
    if(numberCounter>4){
        numberCounter = 0;
    }
    
    pic.src = Photos[numberCounter].src;
    
}

function lessMe(){
   
    var pic = document.getElementById('photoMe');
    numberCounter = numberCounter - 1;
    if(numberCounter<0){
        numberCounter = 4;
    }
    
    pic.src = Photos[numberCounter].src;
    
   
}

