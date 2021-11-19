var Kevingston =  [
    { 
    id: 1 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Kev/2.jpg'
},

{ 
    id: 2 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Kev/3.jpg'
},

{
    id: 3 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Kev/4.jpg'

},
    { 
    id: 4 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Kev/5.jpg'
},

{ 
    id: 5 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Kev/6.jpg'
},

{
    id: 6 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Kev/17.jpg'

},
    { 
    id: 7 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Kev/14.jpg'
},

{ 
    id: 8 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Kev/8.jpg'
},

{
    id: 9 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Kev/9.jpg'

},
    { 
    id: 10 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Kev/10.jpg'
},

{ 
    id: 11 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Kev/11.jpg'
}
  ]

var numberCounter = 0;

window.addEventListener('DOMContentLoaded', function(){
    load()
});


function load() {
    
    var pic = document.getElementById('photoKevingston');
        
        pic.src = Kevingston[numberCounter].src;
        
    
}
    
function addKev(){
    
    var pic = document.getElementById('photoKevingston');
    numberCounter = numberCounter + 1;
    if(numberCounter>10){
        numberCounter = 0;
    }
    
    pic.src = Kevingston[numberCounter].src;
    
}

function lessKev(){
   
    var pic = document.getElementById('photoKevingston');
    numberCounter = numberCounter - 1;
    if(numberCounter<0){
        numberCounter = 10;
    }
    
    pic.src = Kevingston[numberCounter].src;
    
   
}

