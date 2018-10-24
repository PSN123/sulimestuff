<html>
<head>

<script async defer src="https://apis.google.com/js/api.js" onload="this.onload=function(){};HandleGoogleApiLibrary()" onreadystatechange="if (this.readyState === 'complete') this.onload()"></script>
</head>
<body>
<script>
function handle(){

gapi.load('client:auth2',{
 callback:function(){
 	gapi.client.init({
 		apikey:'AIzaSyDpo5CkHziP-Jo8H4dKHcsDwVuelbR1Lzg',
 		clientId:'754891257947-o4glstigh7g11ol2afs9gak8am967072.apps.googleusercontent.com',
 
scope:'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email & https://www.googleapis.com/auth/plus.me.'
 	}).then(

function(success){

},
function(error){

}

 	);
 },
 onerror:function(){

 }

});


}

$("#login-button").on('click',function(){
$("#login-button").attr('disabled','disabled');

gapi.auth2.getAuthInstance().signIn().then(
function(success){
	gapi.client.requst({path:'https://www.googleapis.com/plus/v1/people/me'}).then(
function(success){
console.log(success){
	var user_info=JSON.parse(success.body);
	console.log(user_info);
	$("#user_information div").eq(0).find("span").text(user_info.displayName);

$("#user_information").show();
$("#login-button").hide();

},
function(error){
	$("#login-button").removeAttr('disabled');
alert('Error:failed to et user user information');
}
}
		);
},
function(error){
	$("#login-button").removeAttr('disabled');
	alert('Error:login failed');
}	

);
});

</script>
</body>
</html>


