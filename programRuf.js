var Rufian =  [
    { 
    id: 1 ,
    src:'/photography/Ruf/1.jpg'
},

{ 
    id: 2 ,
    src:'/photography/Ruf/2.jpg'
},

{
    id: 3 ,
    src: '/photography/Ruf/3.jpg'

},
    { 
    id: 4 ,
    src:'/photography/Ruf/4.jpg'
},

{ 
    id: 5 ,
    src:'/photography/Ruf/5.jpg'
},

{
    id: 6 ,
    src: '/photography/Ruf/6.jpg'

},
    { 
    id: 7 ,
    src:'/photography/Ruf/8.jpg'
},
    { 
    id: 8 ,
    src:'/photography/Ruf/7.jpg'
},
    { 
    id: 9 ,
    src:'/photography/Ruf/9.jpg'
},
    { 
    id: 10 ,
    src:'/photography/Ruf/10.jpg'
},
    { 
    id: 11,
    src:'/photography/Ruf/11.jpg'
},
    { 
    id: 12,
    src:'/photography/Ruf/12.jpg'
},
    { 
    id: 13,
    src:'/photography/Ruf/13.jpg'
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

