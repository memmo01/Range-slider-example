$(".slider").on("input",function(e){
		let value = e.target.value
		let id = e.target.id
 
	switch(id){
		case "one":
		$("#test1").html("$"+value)
		break;

		case 'two':
		$("#test2").html("$"+value)
		break;

		case "three":
		$("#test3").html("$"+value)
		break;

		case "four":
		$("#test4").html("$"+value)
		break;

		case "five":
		$("#test5").html("$"+value)
		break;

		}
	})