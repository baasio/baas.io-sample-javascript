$(document).ready(function(){

	// Info App
	var appInfo = {
		orgName: 'ed38f569-2fc2-11e2-a2c1-02003a570010',
		appName: 'd3ecdaba-ef60-11e2-bfad-06ebb80000ba'
	}

	// Define Baas Class 
	var myFirstApp = new Baas.IO(appInfo);


	$('#inputEmail').bind('change',function(e){

	})


	$('#inputPassword').bind('change',function(e){


	})

	$('.form-horizontal').submit(function(e){

		console.log($('#inputEmail').val());
		console.log($('#inputPassword').val())
		
		myFirstApp.login($('#inputEmail').val(), $('#inputPassword').val(), loginHandler);

		return false;
	})

	function loginHandler(err) {
	  if (err) {
	    //로그인 실패
	  } else {
	    //로그인 성공
	    
	    //로그인 정보 가져오기
	    myFirstApp.getLoggedInUser(function(err, data, user) {
	      console.log(user);
	    })
	  }
	}

	
})