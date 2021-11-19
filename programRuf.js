var Rufian =  [
    { 
    id: 1 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/1.jpg'
},

{ 
    id: 2 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/2.jpg'
},

{
    id: 3 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/3.jpg'

},
    { 
    id: 4 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/4.jpg'
},

{ 
    id: 5 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/5.jpg'
},

{
    id: 6 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/6.jpg'

},
    { 
    id: 7 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/8.jpg'
},
    { 
    id: 8 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/7.jpg'
},
    { 
    id: 9 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/9.jpg'
},
    { 
    id: 10 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/10.jpg'
},
    { 
    id: 11,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/11.jpg'
},
    { 
    id: 12,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/12.jpg'
},
    { 
    id: 13,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Ruf/13.jpg'
}


  ]

var numberCounter = 0;

window.addEventListener('DOMContentLoaded', function(){
    load()
});


function load() {
    
    var pic = document.getElementById('photoRuf');
        
        pic.src = Rufian[numberCounter].src;
        
    
}
    
function addRuf(){
    
    var pic = document.getElementById('photoRuf');
    numberCounter = numberCounter + 1;
    if(numberCounter>12){
        numberCounter = 0;
    }
    
    pic.src = Rufian[numberCounter].src;
    
}

function lessRuf(){
   
    var pic = document.getElementById('photoRuf');
    numberCounter = numberCounter - 1;
    if(numberCounter<0){
        numberCounter = 12;
    }
    
    pic.src = Rufian[numberCounter].src;
    
   
}

