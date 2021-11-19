var Republica =  [
    { 
    id: 1 ,
    src:'/photography/Rep/1.jpg'
},

{ 
    id: 2 ,
    src:'/photography/Rep/2.jpg'
},

{
    id: 3 ,
    src: '/photography/Rep/3.jpg'

},
    { 
    id: 4 ,
    src:'/photography/Rep/4.jpg'
},

{ 
    id: 5 ,
    src:'/photography/Rep/5.jpg'
},

{
    id: 6 ,
    src: '/photography/Rep/6.jpg'

},
    { 
    id: 7 ,
    src:'/photography/Rep/7.jpg'
},

{ 
    id: 8 ,
    src:'/photography/Rep/8.jpg'
},

{
    id: 9 ,
    src: '/photography/Rep/9.jpg'

},
    { 
    id: 10 ,
    src:'/photography/Rep/10.jpg'
},

{ 
    id: 11 ,
    src:'/photography/Rep/11.jpg'
},

{
    id: 12 ,
    src: '/photography/Rep/12.jpg'

},

{ 
    id: 13 ,
    src:'/photography/ep/13.jpg'
},

{
    id: 14 ,
    src: '/photography/Rep/14.jpg'

},

{ 
    id: 15 ,
    src:'/photography//Rep/15.jpg'
},

{
    id: 16 ,
    src: '/photography/Rep/16.jpg'
},

{ 
    id: 17 ,
    src:'/photography/Rep/17.jpg'
},

{
    id: 18 ,
    src: '/photography/Rep/18.jpg'
},

{ 
    id: 19 ,
    src:'/photography/Rep/19.jpg'
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

