var Republica =  [
    { 
    id: 1 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/1.jpg'
},

{ 
    id: 2 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/2.jpg'
},

{
    id: 3 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/3.jpg'

},
    { 
    id: 4 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/4.jpg'
},

{ 
    id: 5 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/5.jpg'
},

{
    id: 6 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/6.jpg'

},
    { 
    id: 7 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/7.jpg'
},

{ 
    id: 8 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/8.jpg'
},

{
    id: 9 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/9.jpg'

},
    { 
    id: 10 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/10.jpg'
},

{ 
    id: 11 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/11.jpg'
},

{
    id: 12 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/12.jpg'

},

{ 
    id: 13 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/13.jpg'
},

{
    id: 14 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/14.jpg'

},

{ 
    id: 15 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/15.jpg'
},

{
    id: 16 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/16.jpg'
},

{ 
    id: 17 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/17.jpg'
},

{
    id: 18 ,
    src: 'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/18.jpg'
},

{ 
    id: 19 ,
    src:'file:///C:/Users/Christian/Desktop/Carpetas/ProyectosConCleo/Portfolio/media/brands/Rep/19.jpg'
},

  ]

var numberCounter = 0;

window.addEventListener('DOMContentLoaded', function(){
    load()
});


function load() {
    
    var pic = document.getElementById('photoRepublica');
        
        pic.src = Republica[numberCounter].src;
        
    
}
    
function addRep(){
    
    var pic = document.getElementById('photoRepublica');
    numberCounter = numberCounter + 1;
    if(numberCounter>18){
        numberCounter = 0;
    }
    
    pic.src = Republica[numberCounter].src;
    
}

function lessRep(){
   
    var pic = document.getElementById('photoRepublica');
    numberCounter = numberCounter - 1;
    if(numberCounter<0){
        numberCounter = 18;
    }
    
    pic.src = Republica[numberCounter].src;
    
   
}

