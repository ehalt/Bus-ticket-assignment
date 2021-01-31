
// ============== Increment ==============
const firstClassIncrement = document.getElementById('first-class-increment') ;
firstClassIncrement.addEventListener('click' , function(){
	ticketPriceHandler(true , 'first-class');
	
});
const economyIncrement = document.getElementById('economy-increment') ;
economyIncrement.addEventListener('click', function(){
    ticketPriceHandler(true, 'economy');
})


// ============ Decrement =============
const firstClassDecrement  = document.getElementById('first-class-decrement');
firstClassDecrement.addEventListener('click' , function () {
	ticketPriceHandler(false , 'first-class');
}) 
const economyDecrement = document.getElementById('economy-decrement') ;
economyDecrement.addEventListener('click', function(){
	ticketPriceHandler(false , 'economy');
})


// ========== The main function ============
function ticketPriceHandler(isIncrement, ticketName) {
	var ticketLength = document.getElementById(ticketName+'-input');
    var ticketCount = parseInt(ticketLength.value );
	if (isIncrement == false && ticketCount > 0) {
		ticketCount -=1;  
	}
	if(isIncrement == true){
		ticketCount +=1
	}
	ticketLength.value = ticketCount ;
	var ticketPrice = 0 ;
	if(ticketName== 'first-class'){
		ticketPrice = ticketCount * 150 ;
	}

	if(ticketName == 'economy'){
		ticketPrice = ticketCount * 100;
	}
	
	Calculation(); 
}

// =========== Calculation Function here =============
function Calculation(){
	const firstClassInput = document.getElementById('first-class-input');
	const firstClassValue = parseInt(firstClassInput.value);

	const economyInput = document.getElementById('economy-input');
	const economyValue = parseInt(economyInput.value);


	// ========= count total ========
	var subTotalPrice = firstClassValue * 150 + economyValue * 100 ;
	document.getElementById('sub-total').innerText = '$'+subTotalPrice ;

	// ====== count vat =======
	var ticketVat = Math.floor(subTotalPrice * 10/100);
	document.getElementById('ticket-vat').innerText = '$'+ticketVat ;

	// ========== count total price ===========
	var totalPrice = subTotalPrice + ticketVat ;
	document.getElementById('total-price').innerText = '$'+totalPrice; 
}


// ======== to book tickets =========
var bookNowBtn = document.getElementById('book-now').addEventListener('click', function() {
	const firstClassInput = document.getElementById('first-class-input');
	const economyInput = document.getElementById('economy-input');

	// ======== Form validation =========== 
	if(firstClassInput.value == 0 && economyInput.value == 0){
		alert('Please fill up the form then press > Book Now <')
    }
    
    else{
		document.getElementById('completed-booking').style.visibility='visible';
		goHome();
		firstClassInput.value = 0 ;
		economyInput.value = 0 ;
		document.getElementById('sub-total').innerText = '$'+0;
		document.getElementById('ticket-vat').innerText = '$'+0 ;
		document.getElementById('total-price').innerText = '$'+0; 
	}
});

// ======== to go home =========
function goHome(){
	document.getElementById('go-home').addEventListener('click', function(){
		document.getElementById('completed-booking').style.visibility='hidden';
		
	})
}

