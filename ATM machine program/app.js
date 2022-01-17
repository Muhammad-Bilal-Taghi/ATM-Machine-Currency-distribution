

var atmFunction  = () => {
     var money = document.getElementById('money').value;
     document.getElementById('result').innerHTML = '' ;
     var note = [500 , 100 , 50 , 20 , 10 , 5 , 1];
     var a = 0;
     var limit = 100000;
     var noOFnote = 0;
     if (money % 1 === 0){
          if (money <= limit ) {
       for (i=0; money > 0; i++){
          if (money >= note [a]) {
       money = money - note[a];
       noOFnote = noOFnote+1;
       if (money < note[a]){
            document.getElementById('result').innerHTML += '<strong>' + note[a] + ': </strong>'+
            noOFnote + '<br>';
            a = a+1
            noOFnote = 0;
       }
       
       }else{
         a = a+1;
     } 
}
          }else {
               alert ('Your amount is out of limit')
          }
}
else {
          alert('Please put number multiple of 100');
     }
     
     }
     

