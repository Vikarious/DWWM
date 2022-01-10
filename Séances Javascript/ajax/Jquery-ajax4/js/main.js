$(function(){
	$("#saveusers").on('click', function(){
		var first_name  = $("#first_name").val();
		var last_name   = $("#last_name").val();
		var email       = $("#email").val();
		var dataString  = 'first_name=' + first_name + '&last_name=' + last_name + '&email=' + email;
		//alert(first_name );
		
		if (first_name=='' || last_name=='' || email =='')
		{
		$("#message").html("<div>Remplissez tous les champs, s'il vous plait.</div>");	
		}
		else 
		{
		$.ajax({
		  type: "POST",
		  url:  "saverecords_ajax.php",
		  data: dataString,
		  cache: false,
		  success: function(result){
		  $("#message").html(result);
		  }	  
		  //$("#message").show(3000).html(str).addClass('success').hide(5000);
		});
		}
		return false;
   });
 });// JavaScript Document