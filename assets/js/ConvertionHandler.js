// THE CONVERTION HANDLER 
    // this variable is to get the symbol of what tempratur type
// We select in the first select 
const getFirstTemptSymb = firstSelect.value == "1" ?
" °C" : firstSelect.value == "2" ? 
" °F" : firstSelect.value == "3" ? 
" °Ré" : firstSelect.value == "4" ?  
" K" : firstSelect.value == "5" ? 
" °R" : "",
// this variable is to get the symbol of what tempratur type
// We select in the second select

getSecondTemptSymb = secondSelect.value == "1" ?
" °C" : secondSelect.value == "2" ? 
" °F" : secondSelect.value == "3" ? 
" °Ré" : secondSelect.value == "4" ?  
" K" : secondSelect.value == "5" ? 
" °R" : "",

// this variable is to get the full tempratur ("not the symbol") type
// We select in the first select
getFirstTempt =  firstSelect.value == "1" ? 
"Celcius" : firstSelect.value == "2" ? 
"Farenheit" : firstSelect.value == "3" ? 
"Reamur" : firstSelect.value == "4" ? 
"Kelvin" : firstSelect.value == "5" ? 
"Rankine" : "",

// this variable is to get the full tempratur ("not the symbol") type
// We select in the first selects
getSecondTempt = secondSelect.value == "1" ? 
"Celcius" : secondSelect.value == "2" ? 
"Farenheit" : secondSelect.value == "3" ? 
"Reamur" : secondSelect.value == "4" ? 
"Kelvin" : secondSelect.value == "5" ? 
"Rankine" : ""

// This line of code is for, every user that do input event, is gonna run Convertion Function
firstIpt.addEventListener('input', Convertion)

// This line of code is for, every user that do select event, is gonna run Convertion Function
firstSelect.addEventListener("change",  Convertion)

// This line of code is for, every user that do select event, is gonna run Convertion Function
secondSelect.addEventListener("change", Convertion)


// Fungsi ini berfungsi untuk mengkonversi suhu
function Convertion() {

	let SuhuAwal = firstSelect.value == "1" ?
	" °C " : firstSelect.value == "2" ? 
	" °F " : firstSelect.value == "3" ? 
	" °Ré " : firstSelect.value == "4" ?  
	" K " : firstSelect.value == "5" ? 
	" °R " : "",

	SuhuHasil = secondSelect.value == "1" ?
	" °C " : secondSelect.value == "2" ? 
	" °F " : secondSelect.value == "3" ? 
	" °Ré " : secondSelect.value == "4" ?  
	" K " : secondSelect.value == "5" ? 
	" °R " : ""

	let atas = SuhuAwal +" > " +SuhuHasil+"\r\n"
	

	if(firstSelect.value === "1" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Celcius -> Farenheit
		 secondIpt.value = (parseFloat(firstIpt.value) * 9/5) + 32 	

		 OutputRumus.value = atas
		 + "("
		 + firstIpt.value+" x 9/5) + 32 \r\n = ("
		 + (parseFloat(firstIpt.value) * 9)+"/5) + 32 \r\n = "
		 + (parseFloat(firstIpt.value) * 9/5)+" + 32 \r\n = "
		 + ((parseFloat(firstIpt.value) * 9/5) + 32) + SuhuHasil

		 OutputRumus.replace('/\r?\n/g','<br />')
	
	}else if(firstSelect.value === "1" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Celcius -> Reamur
		 secondIpt.value =  (4 / 5) * parseFloat(firstIpt.value)	

		 OutputRumus.value = atas +
		  "(4 / 5) x " + firstIpt.value + "\r\n = "
		 + (4 / 5) + " x " + (firstIpt.value) + "\r\n = "
		 + (4 / 5) * parseFloat(firstIpt.value) + SuhuHasil

	}else if(firstSelect.value === "1" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Celcius -> Kelvin
		 secondIpt.value = parseFloat(firstIpt.value) + 273.15

		 OutputRumus.value = atas +
		   firstIpt.value + " + 273.15" + "\r\n = "
		 + (parseFloat(firstIpt.value) + 273.15) + SuhuHasil

	}else if(firstSelect.value === "1" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Celcius -> Rankine
		 secondIpt.value = parseFloat(firstIpt.value) * 9/5 + 491.67

		 OutputRumus.value = atas +
		   firstIpt.value + "x 9/5 + 491.67" + "\r\n = "
		 + parseFloat(firstIpt.value) * 9 + " / 5 + 491.67\r\n = "
		 + parseFloat(firstIpt.value) * 9/5 + " + 491.67\r\n = "
		 + ((parseFloat(firstIpt.value) * 9/5) + 491.67) + SuhuHasil

	}else if(firstSelect.value === "2" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Farenheit -> Celcius
		 secondIpt.value = (parseFloat(firstIpt.value) - 32) * 5/9 	

		 OutputRumus.value = atas +"( "
		 + firstIpt.value+ " - 32) x 5/9" + "\r\n = "
		 + (parseFloat(firstIpt.value) - 32) + " x 5/9\r\n = "
		 + ((parseFloat(firstIpt.value) - 32) * 5) + " / 9\r\n = "
		 + ((parseFloat(firstIpt.value) - 32) * 5/9) + SuhuHasil

	}else if(firstSelect.value === "2" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Farenheit -> Reamur
		 secondIpt.value = (parseFloat(firstIpt.value) - 32) * (4/9)

		 OutputRumus.value = atas +"( "
		 + firstIpt.value + " - 32) x (4/9)" + "\r\n = "
		 + (parseFloat(firstIpt.value) - 32) + " x "+ (4/9) + "\r\n = "
		 + ((parseFloat(firstIpt.value) - 32) * (4/9)) + SuhuHasil

	}else if(firstSelect.value === "2" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Farenheit -> Kelvin
		 secondIpt.value = (parseFloat(firstIpt.value) - 32) * 5/9 + 273.15 

		 OutputRumus.value = atas +"( "
		 + firstIpt.value + " - 32) x (5/9)" + "\r\n = "
		 + (parseFloat(firstIpt.value) - 32) + " x "+ (5/9) + "\r\n = "
		 + ((parseFloat(firstIpt.value) - 32) * (5/9)) + SuhuHasil

	}else if(firstSelect.value === "2" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Farenheit -> Rankine
		 secondIpt.value = parseFloat(firstIpt.value) + 459.67
		 OutputRumus.value = atas +
		   firstIpt.value + " + 459.67" + "\r\n = "
		 + (parseFloat(firstIpt.value) + 459.67) + SuhuHasil
		 
	}else if(firstSelect.value === "3" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Reamur -> Celcius
		 secondIpt.value = parseFloat(firstIpt.value) * (5/4)

		 OutputRumus.value = atas +
		   firstIpt.value + " x (5/4)" + "\r\n = "
		 + (parseFloat(firstIpt.value) * 5) + "/4" + "\r\n = "
		 + (parseFloat(firstIpt.value) * (5/4)) + SuhuHasil

	}else if(firstSelect.value === "3" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Reamur -> Farenheit
		 secondIpt.value = parseFloat(firstIpt.value) * (9/4) + 32 

		 OutputRumus.value = atas +
		   firstIpt.value + " x (9/4) + 32" + "\r\n = "
		 + (parseFloat(firstIpt.value) * 9) + "/4 + 32" + "\r\n = "
		 + (parseFloat(firstIpt.value) * 9/4) + " + 32" + "\r\n = "
		 + (parseFloat(firstIpt.value) * (9/4) + 32 ) + SuhuHasil

	}else if(firstSelect.value === "3" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Reamur -> Kelvin
		 secondIpt.value = parseFloat(firstIpt.value) * (5/4) + 273.15 

		 OutputRumus.value = atas +
		   firstIpt.value + " x (5/4) + 273.15" + "\r\n = "
		 + (parseFloat(firstIpt.value) * 5) + "/4 + 273.15" + "\r\n = "
		 + (parseFloat(firstIpt.value) * (5/4)) + " + 273.15" + "\r\n = "
		 + (parseFloat(firstIpt.value) * (5/4) + 273.15 ) + SuhuHasil
		 
	}else if(firstSelect.value === "3" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Reamur -> Rankine
		 secondIpt.value = (parseFloat(firstIpt.value) * (9/4)) + 491.67
		 OutputRumus.value = atas +
		   firstIpt.value + " x (9/4) + 491.67" + "\r\n = "
		 + (parseFloat(firstIpt.value) * 9) + "/4 + 491.67" + "\r\n = "
		 + (parseFloat(firstIpt.value) * (9/4)) + " + 491.67" + "\r\n = "
		 + ((parseFloat(firstIpt.value) * (9/4)) + 491.67) + SuhuHasil

	}else if(firstSelect.value === "4" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Kelvin -> Celcius
		 secondIpt.value = parseFloat(firstIpt.value) - 273.15 

		 OutputRumus.value = atas +
		   firstIpt.value + " - 273.15" + "\r\n = "
		 + (parseFloat(firstIpt.value) - 273.15) + SuhuHasil

	}else if(firstSelect.value === "4" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Kelvin -> Farenheit
		 secondIpt.value = parseFloat(firstIpt.value) * 9/5 - 459.67

		 OutputRumus.value = atas +
		   firstIpt.value + " x (9/5) - 459.67" + "\r\n = "
		 + (parseFloat(firstIpt.value) * 9) + "/5 - 459.67" + "\r\n = "
		 + (parseFloat(firstIpt.value) * (9/5)) + " - 459.67" + "\r\n = "
		 + (parseFloat(firstIpt.value) * 9/5 - 459.67) + SuhuHasil
		 
	}else if(firstSelect.value === "4" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Kelvin -> Reamur
		 secondIpt.value = (parseFloat(firstIpt.value) - 273.15) * 4/5

		 OutputRumus.value = atas + "("
		 + firstIpt.value + " - 273.15) x 4/5" + "\r\n = "
		 + (parseFloat(firstIpt.value) - 273.15) + " x 4/5" + "\r\n = "
		 + ((parseFloat(firstIpt.value) - 273.15) * 4) + "/5" + "\r\n = "
		 + ((parseFloat(firstIpt.value) - 273.15) * 4/5) + SuhuHasil

	}else if(firstSelect.value === "4" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Kelvin -> Rankine
		 secondIpt.value = parseFloat(firstIpt.value)* 9/5 

		 OutputRumus.value = atas + firstIpt.value + " x 9/5" + "\r\n = "
		 + (parseFloat(firstIpt.value) * 9) + "/5" + "\r\n = "
		 + (parseFloat(firstIpt.value)* 9/5 ) + SuhuHasil

	}else if(firstSelect.value === "5" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Rankine -> Celcius
		 secondIpt.value = (parseFloat(firstIpt.value) - 491.67) * (5/9) 

		 OutputRumus.value = atas + "("
		 + firstIpt.value + " - 491.67) x 5/9" + "\r\n = "
		 + (parseFloat(firstIpt.value) - 491.67) + " x 5/9" + "\r\n = "
		 + ((parseFloat(firstIpt.value) - 491.67) * 5) + "/9" + "\r\n = "
		 + ((parseFloat(firstIpt.value) - 491.67) * (5/9)) + SuhuHasil

	}else if(firstSelect.value === "5" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Rankine -> Farenheit
		 secondIpt.value = parseFloat(firstIpt.value)	- 459.67

		 OutputRumus.value = atas +
		   firstIpt.value + " - 459.67" + "\r\n = "
		 + (parseFloat(firstIpt.value) - 459.67) + SuhuHasil

	}else if(firstSelect.value === "5" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Rankine -> Reamur
		 secondIpt.value = (parseFloat(firstIpt.value) - 491.67) * 4/9

		 OutputRumus.value = atas + "("
		 + firstIpt.value + " - 491.67) x 4/9" + "\r\n = "
		 + (parseFloat(firstIpt.value) - 491.67) + " x 4/9" + "\r\n = "
		 + ((parseFloat(firstIpt.value) - 491.67) * 4) + "/9" + "\r\n = "
		 + ((parseFloat(firstIpt.value) - 491.67) * 4/9) + SuhuHasil

	}else if(firstSelect.value === "5" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Rankine -> Kelvin
		 secondIpt.value = parseFloat(firstIpt.value) * 5/9 

		 OutputRumus.value = atas +
		   firstIpt.value + " x 5/9" + "\r\n = "
		 + (parseFloat(firstIpt.value) * 5) + "/9" + "\r\n = "
		 + (parseFloat(firstIpt.value) * 5/9) + SuhuHasil
		 
	} else if(firstSelect.value === secondSelect.value  && firstIpt.value !== "") {
		 secondIpt.value = firstIpt.value	

		 OutputRumus.value = atas + firstIpt.value + " = " + secondIpt.value
	} else if(firstIpt.value == "") {
		secondIpt.value = ""
		OutputRumus.value = ""
	}
	
	if(secondIpt.value == "NaN") {
		secondIpt.value = ""
		OutputRumus.value = ""
	}
}

// This function is for returning alert
function AlertHandler(alert, bg) {
	document.getElementById("alert-container").innerHTML = `
	<div style="font-weight: 500; padding: 2px 8px; width: fit-content; float: right" class="peringatan me-3 alert alert-${bg} alert-dismissible fade show" role="alert">
			${alert}
	</div>
	`
}