$(document).ready(function(){

		$.ajax({
		'url':"https://api.adviceslip.com/advice/search/",
		'type': "GET",
		'dataType': "JSON",
    'data': {
    slip_id: "0",
    advice: "success",
    },

    $("input").click(function(){
		$("input").removeAttr('value');
	});

  $("button").click(function(){
		var Advice_Search =$("input").val();

    success:function(data){
      console.log(data);

    $("p").append(slip_id,advice);

    error:function(data, textStatus, errorThrown){
    			console.log("error");
    			console.log(errorThrown);
    		},
  });
});
