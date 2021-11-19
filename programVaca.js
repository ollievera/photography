var Vaca =  [
    { 
    id: 1 ,
    src:'/photography/vaca/1.jpg'
},

{ 
    id: 2 ,
    src:'/photography/vaca/2.jpg'
},

{
    id: 3 ,
    src: '/photography/vaca/3.jpg'

},
    { 
    id: 4 ,
    src:'/photography/vaca/4.jpg'
},

{ 
    id: 5 ,
    src:'/photography/vaca/5.jpg'
},

{
    id: 6 ,
    src: '/photography/vaca/6.jpg'

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

