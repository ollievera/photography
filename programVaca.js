var Vaca =  [
    { 
    id: 1 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/vaca/1.jpg'
},

{ 
    id: 2 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/vaca/2.jpg'
},

{
    id: 3 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/vaca/3.jpg'

},
    { 
    id: 4 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/vaca/4.jpg'
},

{ 
    id: 5 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/vaca/5.jpg'
},

{
    id: 6 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/vaca/6.jpg'

}

  ]

var numberCounter = 0;

window.addEventListener('DOMContentLoaded', function(){
    load()
});


function load() {
    
    var pic = document.getElementById('photoVaca');
        
        pic.src = Vaca[numberCounter].src;
        
    
}
    
function addVaca(){
    
    var pic = document.getElementById('photoVaca');
    numberCounter = numberCounter + 1;
    if(numberCounter>5){
        numberCounter = 0;
    }
    
    pic.src = Vaca[numberCounter].src;
    
}

function lessVaca(){
   
    var pic = document.getElementById('photoVaca');
    numberCounter = numberCounter - 1;
    if(numberCounter<0){
        numberCounter = 5;
    }
    
    pic.src = Vaca[numberCounter].src;
    
   
}

