$(".slider").on("input",function(e){
		let value = e.target.value
		let id = e.target.id
 
	switch(id){
		case "one":
		$("#test1").html("$"+value)
			calculatePayment()
		break;

		case 'two':
		$("#test2").html("$"+value);
			calculatePayment()
		break;

		case "three":
		$("#test3").html(value + "Years")
			calculatePayment()
		break;

		case "four":
		$("#test4").html(value+" %")
			calculatePayment()
		break;

		}
	})

//this function gathers the values of each range and places them in a variable
function calculatePayment(){

	let loanAmount= $("#one").val();
	let tradeIn = $("#two").val();
	let term = $("#three").val();
	let interestRate =$("#four").val();


let loanPayment;


//calculate rate on monthly basis
	let r = (interestRate/100)/12

//convert years of loan into months	
	let monthTerm = term *12;

//formula for caluculating monthly payment
	let totalLoan = (loanAmount - tradeIn)
	let formulaPart1= (r*(totalLoan))
	let formulaPart2= 1-(1+r)**-monthTerm
	 loanPayment = formulaPart1/formulaPart2;

//conditions with rates and terms

	if((interestRate == 0) &&(term == 0)) {
		loanPayment = totalLoan;
	}
	
	else if ((interestRate == 0) &&(term !== 0)){
		loanPayment = totalLoan/monthTerm;
		// alert(term)
	}
	else if((interestRate !== 0) &&(term == 0)){
		loanPayment = totalLoan
	}


//populate total monthly payment ID monthly-calculator and leave show only two decical places
$("#monthly-calculation").html("$"+loanPayment.toFixed(2))

}
