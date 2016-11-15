var updatePollTime = function(polltime){
   if(polltime){
      polltime = parseInt(polltime) * 1000;
      chrome.storage.sync.set({'polltime': polltime}, function(){});
   }
};

var getPollTime = function(cb){
   chrome.storage.sync.get('polltime', function(obj){
      if(obj){
         cb(obj);
      }  
   });
}

