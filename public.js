function scrap(widget_id){
	let url = $("#webhooklink").prop("value");
	if (url == ''){
		alert("Webhook link is empty!");
		return;
	}
	for (let i = 0; i <= widget_id; i++){
		tweets = $("#twitter-widget-"+ i).contents().find("div[data-tweet-id]");
		if (localStorage.getItem("webhookTwitterURL")){
			console.log("Webhook has been found in localStorage");
			$("#webhooklink").prop("value", localStorage.getItem("webhookTwitterURL"))
		}

		let url = $("#webhooklink").prop("value");
		localStorage.setItem("webhookTwitterURL", url);
		console.log("Webhook found in local storage");
		// for (let i = tweets.length; i >= 0; i--){
		//	let id = tweets.eq(i).attr("data-tweet-id")
		let id = tweets.eq(0).attr("data-tweet-id");
		console.log(id);
		$.post(url, {"content":"https://twitter.com/Sodapoppintv/status/"+id});
		sleep(1000);

		// }
	}
}
window.onload = function(){

}
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
