$( document ).ready(function(){
    var Randy=Math.floor(Math.random()*100+20)
    $("#computer").text(Randy);

var userTotal= 0; 
var wins= 0;
var loses= 0;
var c1= Math.floor(Math.random()*11+1)
var c2= Math.floor(Math.random()*11+1)
var c3= Math.floor(Math.random()*11+1)
var c4= Math.floor(Math.random()*11+1)
   
$("#winns").text(wins);
$("#losses").text(loses);
  
  function winner(){
  alert("You won!");
    wins++; 
    $("#winns").text(wins);
    reset();
  }
 
  function loser(){
  alert ("You lose!");
    loses++;
    $('#losses').text(loses);
    reset()
  }

function reset(){
    Randy=Math.floor(Math.random()*100+20)
    $('#computer').text(Randy);
    // var elems = document.getElementsByTagName( "input" );
    // var arr = jQuery.makeArray( input );
        c1= Math.floor(Math.random()*11+1);
        c2= Math.floor(Math.random()*11+1);
        c3= Math.floor(Math.random()*11+1);
        c4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#userAdd').text(userTotal);
        } 
 
    $('#c1').on ('click', function(){
      userTotal = userTotal + c1;
      $('#userAdd').text(userTotal);           
          if (userTotal == Randy){
            winner();
          }
          else if ( userTotal > Randy){
            loser();
          }   
    })  

    $('#c2').on ('click', function(){
        userTotal = userTotal + c2;
        $('#userAdd').text(userTotal); 
            if (userTotal == Randy){
              winner();
            }
            else if ( userTotal > Randy){
              loser();
            }   
      })    

      $('#c3').on ('click', function(){
        userTotal = userTotal + c3;
        $('#userAdd').text(userTotal); 
            if (userTotal == Randy){
              winner();
            }
            else if ( userTotal > Randy){
              loser();
            }   
      }) 

      $('#c4').on ('click', function(){
        userTotal = userTotal + c4;
        $('#userAdd').text(userTotal); 
            if (userTotal == Randy){
              winner();
            }
            else if ( userTotal > Randy){
              loser();
            }   
      }) 
  }); 