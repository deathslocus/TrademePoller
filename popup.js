
$(document).ready(function(){
   getPollTime(function(pollRate){
      $('input').val(parseInt(pollRate.polltime) / 1000) ;    
   });

   $('button').click(function(e){
      var pollRate = $('input').val();
      if(pollRate){
         updatePollTime(pollRate);
      }
   });
});
