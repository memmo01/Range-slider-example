$(".slider").on("input",function(e){
		let value = e.target.value
		let id = e.target.id
 
	switch(id){
		case "one":
		$("#one").html("$"+value)
			calculatePayment()
		break;

		case 'two':
		$("#test2").html("$"+value);
			calculatePayment()
		break;

		case "three":
		$("#test3").html("$"+value)
			calculatePayment()
		break;

		case "four":
		$("#test4").html("$"+value)
			calculatePayment()
		break;

		case "five":
		$("#test5").html("$"+value)
			calculatePayment()
		break;

		}
	})

function calculatePayment(){

	let loanAmount= $("#one").val();
	let tradeIn = $("#two").val();
	let term = $("#three").val();
	let interestRate =$("#four").val();

let totalLoan = (loanAmount - tradeIn)

$("#monthly-calculation").html("$"+totalLoan)
	// let totalLoan = Number(loanAmount) = Number(tradeIn);
	// console.log(typeof(totalLoan));
	// console.log(totalLoan) 
}