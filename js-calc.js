var ga_total = [];
var gs_output = '';


var go_screen = $('.screen');

$(document).on('click', 'button',function(){


  input = $(this).html();
 
  if( $.isNumeric(input) || input === '.' ){
 
    gs_output += input;
    go_screen.html(gs_output);


  } else if (input === '=') {
    ga_total.push(gs_output);

    var li_newtotal = Number(ga_total[0]);
    for (var i = 1; i < ga_total.length; i++) {
      var li_nextnum = Number(ga_total[i+1])
      var ls_action = ga_total[i];
      
      switch( ls_action ){
        case '/':

          li_newtotal /= li_nextnum;

          break;
        case '*':

          li_newtotal *= li_nextnum;

          break;
        case '-':

          li_newtotal -= li_nextnum;

          break;
        default:

          li_newtotal += li_nextnum;

          break;
      }
      
      i++;
    }

    if (li_newtotal < 0) {
      li_newtotal = Math.abs(input) + '-';
    }
    
    go_screen.html(li_newtotal);
    entries = [];
    temp = '';
    
  
  } else {
    ga_total.push(gs_output);
    ga_total.push(input);
    gs_output = '';
  }


});


