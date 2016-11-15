var buynowId = "BuyNow_BuyNow";
var currentbidId = "Bidding_CurrentBidValue";
var nextbidId = "Bidding_bidFormBid";

var updater;

$(document).ready(function(e){ 
   getPollTime(function(polltime){
      polltime = parseInt(polltime.polltime);
      console.log("Poll time: " +polltime);
      updater = setInterval(function(){
            if(window.location.href.indexOf("auction") > -1 || window.location.href.indexOf("Listing") > - 1){
               $.get(window.location.href).done(function(e){ 
                  updatePrices(fetchPrices(e));
               });
            }
         }, polltime);
             
   });   
});

var updatePrices = function(prices){
  if(prices.bn){
      $(document).find("#" + buynowId).html(prices.bn);
  }
  if(prices.cb){
      $(document).find("#" + currentbidId).html(prices.cb);
  }
  if(prices.nb){
      $(document).find("#" + nextbidId).val(prices.nb);
  }
};

var fetchPrices = function(blob){
   var buynow = $(blob).find("#" + buynowId).html();
   var currentbid = $(blob).find("#" + currentbidId).html();
   var nextbid = $(blob).find("#" + nextbidId).val();
   return {bn: buynow, cb: currentbid, nb: nextbid};
};

