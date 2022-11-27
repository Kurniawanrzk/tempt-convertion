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
	" °R " : "",

	SuhuKiri =  firstSelect.value == "1" ? 
	"Celcius" : firstSelect.value == "2" ? 
	"Farenheit" : firstSelect.value == "3" ? 
	"Reamur" : firstSelect.value == "4" ? 
	"Kelvin" : firstSelect.value == "5" ? 
	"Rankine" : "",

	SuhuKanan =  secondSelect.value == "1" ? 
	"Celcius" : secondSelect.value == "2" ? 
	"Farenheit" : secondSelect.value == "3" ? 
	"Reamur" : secondSelect.value == "4" ? 
	"Kelvin" : secondSelect.value == "5" ? 
	"Rankine" : ""

	let atas = SuhuAwal +" > " +SuhuHasil+"\r\n"
	

	if (firstSelect.value === "1" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Celcius -> Farenheit

		Penjelasan.value = localStorage.getItem("lang") == "id" ? 
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
		"mengkali suhu " + SuhuKiri + "nya dengan 9 setelah itu kita bagi 5 dan pada akhirnya ditambah 32 " +
		"maka dapatlah hasilnya"
		:
		"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
		"multiply the temperature " + SuhuKiri + " by 9 then we divide by 5 and in the end add 32 " +
		"then we get the result"

		secondIpt.value = (parseFloat(firstIpt.value) * 9 / 5) + 32

		OutputRumus.value = atas
			+ "("
			+ firstIpt.value + " x 9/5) + 32 \r\n = ("
			+ (parseFloat(firstIpt.value) * 9) + "/5) + 32 \r\n = "
			+ (parseFloat(firstIpt.value) * 9 / 5) + " + 32 \r\n = "
			+ ((parseFloat(firstIpt.value) * 9 / 5) + 32) + SuhuHasil

		OutputRumus.replace('/\r?\n/g', '<br />')


	} else if (firstSelect.value === "1" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Celcius -> Reamur
		
		Penjelasan.value = localStorage.getItem("lang") == "id" ? 
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
		"mengkali suhu " + SuhuKiri + "nya dengan 9 setelah itu kita bagi 5 dan pada akhirnya ditambah 32 " +
		"maka dapatlah hasilnya"
		:
		"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
		"multiply the temperature " + SuhuKiri + " by 9 after that we divide by 5 and in the end add 32 " +
		"then we get the result"

		secondIpt.value = (4 / 5) * parseFloat(firstIpt.value)

		OutputRumus.value = atas +
			"(4 / 5) x " + firstIpt.value + "\r\n = "
			+ (4 / 5) + " x " + (firstIpt.value) + "\r\n = "
			+ (4 / 5) * parseFloat(firstIpt.value) + SuhuHasil

		

	} else if (firstSelect.value === "1" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Celcius -> Kelvin

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"menambah suhu " + SuhuKiri + "nya dengan 273,15 " +
			"maka dapatlah hasilnya"
			:
		"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
		"increases temperature " + SuhuKiri + " by 273.15 " +
		"then we get the result"

		secondIpt.value = parseFloat(firstIpt.value) + 273.15

		OutputRumus.value = atas +
			firstIpt.value + " + 273.15" + "\r\n = "
			+ (parseFloat(firstIpt.value) + 273.15) + SuhuHasil

		
	} else if (firstSelect.value === "1" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Celcius -> Rankine
		
		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
		"mengkali suhu " + SuhuKiri + "nya dengan 9 setelah itu dibagi 5 dan pada akhirnya ditambah 491,67 " +
		"maka dapatlah hasilnya"
			:
		"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
		"multiply the temperature " + SuhuKiri + " by 9 then divide by 5 and add 491.67 " +
		"then we get the result"

		secondIpt.value = parseFloat(firstIpt.value) * 9 / 5 + 491.67

		OutputRumus.value = atas +
			firstIpt.value + "x 9/5 + 491.67" + "\r\n = "
			+ parseFloat(firstIpt.value) * 9 + " / 5 + 491.67\r\n = "
			+ parseFloat(firstIpt.value) * 9 / 5 + " + 491.67\r\n = "
			+ ((parseFloat(firstIpt.value) * 9 / 5) + 491.67) + SuhuHasil

		

	} else if (firstSelect.value === "2" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Farenheit -> Celcius

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengurangi suhu " + SuhuKiri + "nya dengan 32 setelah itu dikali 5 dan pada akhirnya dibagi 9 " +
			"maka dapatlah hasilnya"
			:
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
		"reduce the temperature " + SuhuKiri + " by 32 then multiply by 5 and divide by 9 " +
			"then we get the result"

		secondIpt.value = (parseFloat(firstIpt.value) - 32) * 5 / 9

		OutputRumus.value = atas + "( "
			+ firstIpt.value + " - 32) x 5/9" + "\r\n = "
			+ (parseFloat(firstIpt.value) - 32) + " x 5/9\r\n = "
			+ ((parseFloat(firstIpt.value) - 32) * 5) + " / 9\r\n = "
			+ ((parseFloat(firstIpt.value) - 32) * 5 / 9) + SuhuHasil

		

	} else if (firstSelect.value === "2" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Farenheit -> Reamur

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengurangi suhu " + SuhuKiri + "nya dengan 32 setelah itu dikali 4 dan pada akhirnya dibagi 9" +
			"maka dapatlah hasilnya"
			:
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"subtract the temperature " + SuhuKiri + " by 32 then multiply by 4 and divide by 9" +
				"then we get the result"

		secondIpt.value = (parseFloat(firstIpt.value) - 32) * (4 / 9)

		OutputRumus.value = atas + "( "
			+ firstIpt.value + " - 32) x (4/9)" + "\r\n = "
			+ (parseFloat(firstIpt.value) - 32) + " x " + (4 / 9) + "\r\n = "
			+ ((parseFloat(firstIpt.value) - 32) * (4 / 9)) + SuhuHasil

		

	} else if (firstSelect.value === "2" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Farenheit -> Kelvin

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengurangi suhu " + SuhuKiri + "nya dengan 32, setelah itu dikali 0,555" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"reduce the temperature " + SuhuKiri + " by 32, then multiply by 0.555" +
				"then we get the result"

		secondIpt.value = (parseFloat(firstIpt.value) - 32) * 5 / 9 + 273.15

		OutputRumus.value = atas + "( "
			+ firstIpt.value + " - 32) x (5/9)" + "\r\n = "
			+ (parseFloat(firstIpt.value) - 32) + " x " + (5 / 9) + "\r\n = "
			+ ((parseFloat(firstIpt.value) - 32) * (5 / 9)) + SuhuHasil

		

	} else if (firstSelect.value === "2" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Farenheit -> Rankine

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengurangi suhu " + SuhuKiri + "nya dengan 459,67" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"reducing the temperature " + SuhuKiri + " by 459.67" +
				"then we get the result"

		secondIpt.value = parseFloat(firstIpt.value) + 459.67
		OutputRumus.value = atas +
			firstIpt.value + " + 459.67" + "\r\n = "
			+ (parseFloat(firstIpt.value) + 459.67) + SuhuHasil

		

	} else if (firstSelect.value === "3" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Reamur -> Celcius

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengkali suhu " + SuhuKiri + "nya dengan 5 lalu kita bagi dengan 4" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"multiply the temperature " + SuhuKiri + " by 5 then we divide by 4" +
				"then we get the result"

		secondIpt.value = parseFloat(firstIpt.value) * (5 / 4)

		OutputRumus.value = atas +
			firstIpt.value + " x (5/4)" + "\r\n = "
			+ (parseFloat(firstIpt.value) * 5) + "/4" + "\r\n = "
			+ (parseFloat(firstIpt.value) * (5 / 4)) + SuhuHasil

		

	} else if (firstSelect.value === "3" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Reamur -> Farenheit

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengkali suhu " + SuhuKiri + "nya dengan 9 lalu kita bagi dengan 4 dan akhirnya dibagi 32" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"multiply the temperature " + SuhuKiri + " by 9 then we divide by 4 and finally divide by 32" +
				"then we get the result"

		secondIpt.value = parseFloat(firstIpt.value) * (9 / 4) + 32

		OutputRumus.value = atas +
			firstIpt.value + " x (9/4) + 32" + "\r\n = "
			+ (parseFloat(firstIpt.value) * 9) + "/4 + 32" + "\r\n = "
			+ (parseFloat(firstIpt.value) * 9 / 4) + " + 32" + "\r\n = "
			+ (parseFloat(firstIpt.value) * (9 / 4) + 32) + SuhuHasil

		

	} else if (firstSelect.value === "3" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Reamur -> Kelvin

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengkali suhu " + SuhuKiri + "nya dengan 5 lalu kita bagi dengan 4 dan akhirnya ditambah 273,15" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"multiply the temperature " + SuhuKiri + " by 5 then we divide by 4 and finally add 273.15" +
				"then we get the result"

		secondIpt.value = parseFloat(firstIpt.value) * (5 / 4) + 273.15

		OutputRumus.value = atas +
			firstIpt.value + " x (5/4) + 273.15" + "\r\n = "
			+ (parseFloat(firstIpt.value) * 5) + "/4 + 273.15" + "\r\n = "
			+ (parseFloat(firstIpt.value) * (5 / 4)) + " + 273.15" + "\r\n = "
			+ (parseFloat(firstIpt.value) * (5 / 4) + 273.15) + SuhuHasil

		

	} else if (firstSelect.value === "3" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Reamur -> Rankine

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengkali suhu " + SuhuKiri + "nya dengan 9 lalu kita bagi dengan 4 dan akhirnya ditambah 491.67" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"multiply the temperature " + SuhuKiri + " by 9 then we divide by 4 and finally add 491.67" +
				"then we get the result"

		secondIpt.value = (parseFloat(firstIpt.value) * (9 / 4)) + 491.67

		OutputRumus.value = atas +
			firstIpt.value + " x (9/4) + 491.67" + "\r\n = "
			+ (parseFloat(firstIpt.value) * 9) + "/4 + 491.67" + "\r\n = "
			+ (parseFloat(firstIpt.value) * (9 / 4)) + " + 491.67" + "\r\n = "
			+ ((parseFloat(firstIpt.value) * (9 / 4)) + 491.67) + SuhuHasil

		

	} else if (firstSelect.value === "4" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Kelvin -> Celcius

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengurangi suhu " + SuhuKiri + "nya dengan 273,15" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"reduces temperature " + SuhuKiri + " by 273.15" +
				"then we get the result"

		secondIpt.value = parseFloat(firstIpt.value) - 273.15

		OutputRumus.value = atas +
			firstIpt.value + " - 273.15" + "\r\n = "
			+ (parseFloat(firstIpt.value) - 273.15) + SuhuHasil

		

	} else if (firstSelect.value === "4" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Kelvin -> Farenheit

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengkali suhu " + SuhuKiri + "nya dengan 9 lalu dibagi 5 dan akhirnya dikurang 459,67" +
			"maka dapatlah hasilnya":
			"multiply the temperature " + SuhuKiri + " by 9 then divide by 5 and finally subtract 459.67" +
			"then we get the result"

		secondIpt.value = parseFloat(firstIpt.value) * 9 / 5 - 459.67

		OutputRumus.value = atas +
			firstIpt.value + " x (9/5) - 459.67" + "\r\n = "
			+ (parseFloat(firstIpt.value) * 9) + "/5 - 459.67" + "\r\n = "
			+ (parseFloat(firstIpt.value) * (9 / 5)) + " - 459.67" + "\r\n = "
			+ (parseFloat(firstIpt.value) * 9 / 5 - 459.67) + SuhuHasil

		
	} else if (firstSelect.value === "4" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Kelvin -> Reamur

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengurangi suhu " + SuhuKiri + "nya dengan 273,15 lalu dikali 4 dan akhirnya dibagi 5" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"subtract the temperature " + SuhuKiri + " by 273.15 then multiply by 4 and finally divide by 5" +
				"then we get the result"

		secondIpt.value = (parseFloat(firstIpt.value) - 273.15) * 4 / 5

		OutputRumus.value = atas + "("
			+ firstIpt.value + " - 273.15) x 4/5" + "\r\n = "
			+ (parseFloat(firstIpt.value) - 273.15) + " x 4/5" + "\r\n = "
			+ ((parseFloat(firstIpt.value) - 273.15) * 4) + "/5" + "\r\n = "
			+ ((parseFloat(firstIpt.value) - 273.15) * 4 / 5) + SuhuHasil

		

	} else if (firstSelect.value === "4" && secondSelect.value === "5" && firstIpt.value !== "") {
		// Kelvin -> Rankine

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengkali suhu " + SuhuKiri + "nya dengan 9 lalu dibagi 5" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"multiply the temperature " + SuhuKiri + " by 9 then divide by 5" +
				"then we get the result"

		secondIpt.value = parseFloat(firstIpt.value) * 9 / 5

		OutputRumus.value = atas + firstIpt.value + " x 9/5" + "\r\n = "
			+ (parseFloat(firstIpt.value) * 9) + "/5" + "\r\n = "
			+ (parseFloat(firstIpt.value) * 9 / 5) + SuhuHasil

		

	} else if (firstSelect.value === "5" && secondSelect.value === "1" && firstIpt.value !== "") {
		// Rankine -> Celcius

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengurangi suhu " + SuhuKiri + "nya dengan 491,67 lalu dikali 5 dan akhirnya dibagi 9" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"subtract the temperature " + SuhuKiri + " by 491.67 then multiply by 5 and finally divide by 9" +
				"then we get the result"

		secondIpt.value = (parseFloat(firstIpt.value) - 491.67) * (5 / 9)

		OutputRumus.value = atas + "("
			+ firstIpt.value + " - 491.67) x 5/9" + "\r\n = "
			+ (parseFloat(firstIpt.value) - 491.67) + " x 5/9" + "\r\n = "
			+ ((parseFloat(firstIpt.value) - 491.67) * 5) + "/9" + "\r\n = "
			+ ((parseFloat(firstIpt.value) - 491.67) * (5 / 9)) + SuhuHasil

		

	} else if (firstSelect.value === "5" && secondSelect.value === "2" && firstIpt.value !== "") {
		// Rankine -> Farenheit

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengurangi suhu " + SuhuKiri + "nya dengan 459,67" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"reducing the temperature " + SuhuKiri + " by 459.67" +
			"then we get the result"

		secondIpt.value = parseFloat(firstIpt.value) - 459.67

		OutputRumus.value = atas +
			firstIpt.value + " - 459.67" + "\r\n = "
			+ (parseFloat(firstIpt.value) - 459.67) + SuhuHasil

		

	} else if (firstSelect.value === "5" && secondSelect.value === "3" && firstIpt.value !== "") {
		// Rankine -> Reamur

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengurangi suhu " + SuhuKiri + "nya dengan 491,67 lalu dikali dengan 4 dan akhirnya dibagi 9" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"subtract the temperature " + SuhuKiri + " by 491.67 then multiply by 4 and finally divide by 9" +
				"then we get the result"

		secondIpt.value = (parseFloat(firstIpt.value) - 491.67) * 4 / 9

		OutputRumus.value = atas + "("
			+ firstIpt.value + " - 491.67) x 4/9" + "\r\n = "
			+ (parseFloat(firstIpt.value) - 491.67) + " x 4/9" + "\r\n = "
			+ ((parseFloat(firstIpt.value) - 491.67) * 4) + "/9" + "\r\n = "
			+ ((parseFloat(firstIpt.value) - 491.67) * 4 / 9) + SuhuHasil

		

	} else if (firstSelect.value === "5" && secondSelect.value === "4" && firstIpt.value !== "") {
		// Rankine -> Kelvin

		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"untuk mengubah " + SuhuKiri + " Ke " + SuhuKanan + " yang perlu kita lakukan adalah " +
			"mengkali suhu " + SuhuKiri + "nya dengan 5 lalu dibagi dengan 9" +
			"maka dapatlah hasilnya":
			"to change " + SuhuKiri + " to " + SuhuKanan + " the first thing we do is " +
			"multiply the temperature " + SuhuKiri + " by 5 then divide by 9" +
				"then we get the result"

		secondIpt.value = parseFloat(firstIpt.value) * 5 / 9

		OutputRumus.value = atas +
			firstIpt.value + " x 5/9" + "\r\n = "
			+ (parseFloat(firstIpt.value) * 5) + "/9" + "\r\n = "
			+ (parseFloat(firstIpt.value) * 5 / 9) + SuhuHasil

		

	} else if (firstSelect.value === secondSelect.value && firstIpt.value !== "") {
		
		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"apakah saya harus menjelaskan ini juga ?"
		:
		"Should I explain this too?"

		secondIpt.value = firstIpt.value

		OutputRumus.value = atas + firstIpt.value + " = " + secondIpt.value

		
	} else if (firstIpt.value == "" || firstIpt.value == "."  ) {
		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"apa yang harus saya jelaskan ?"
		:
		"What should I explain?"

		secondIpt.value = ""
		OutputRumus.value = ""

		
	}
	if (secondIpt.value == "NaN") {
		Penjelasan.value = localStorage.getItem("lang") == "id" ?
		"yang benar saja"
		:
		"Seriously"

		secondIpt.value = ""
		OutputRumus.value = ""

		
	}
}

// This function is for returning alert
function AlertHandler(alert, bg) {
	document.getElementById("alert-container").innerHTML = `
	<div id="apalah" style="font-weight: 500; padding: 2px 8px; width: fit-content; float: right" class="peringatan me-3 alert alert-${bg} alert-dismissible fade show" role="alert">
			${alert}
	</div>	
	`
}