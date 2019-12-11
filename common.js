function loadFire(data_url){
  // Get a database reference to our posts
  var ref = new Firebase(data_url);
  // Attach an asynchronous callback to read the data at our posts reference
  ref.on("value", function(snapshot) {
    console.log('Firebase Date Loaded!')
    // console.log(snapshot.val());
    populateFire(snapshot.val());
  }, function (errorObject) {
    console.log("Firebase read failed: " + errorObject.code);
    populatePersonalUpdates(['Loading Failed :-('], div_id, max_len);
  });
}

function populateFire(content){
  var markup = '';
  totalPosts = 0;


  item_pre_markup = content.data_pre;
  item_post_markup = content.data_post;
  max_len = content.max_display;
  data = content.data;
  div_id = content.html_selector;

  wrap_pre = content.pre;
  wrap_post = content.post;

  if(content.reverse){
    data.reverse();
  }

  for(i = 0; i < data.length; ++i){

    if(!data[i] || (typeof data[i] === 'object' && 'skip' in data[i] && data[i].skip))
      continue;


    if('item_decorator' in content){
      data_item = window[content.item_decorator](data[i]);
    }else{
      data_item = data[i]
    }

    markup += item_pre_markup + data_item + item_post_markup;

    if(++totalPosts >= max_len){
      break;
    }
  }
  $(div_id).html(wrap_pre + markup + wrap_post);
}


var bigTitle = 'Shafiul Azam Chowdhury';

function commonDecoration(){
	$("#bigTitle").html(bigTitle);
}


function gotoURL(url){
  window.location = url;
}

$(document).ready(function(){
	commonDecoration();
});