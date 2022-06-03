let urgentOptions =[ 
new Option("3 месяца - 20%", "3,20"),
new Option("6 месяцев - 22%", "6,22"),
new Option("9 месяцев - 23%", "9,23"),
new Option("1 год - 24%", "12,24"),
new Option("1,5 года - 18%", "18,18"),
new Option(" 2 года - 15%", "24,15")
]

let replenishedOptions =[ 
new Option("6 месяцев - 20%", "6,20"),
new Option("1 год - 22%", "12,22"),
new Option("1,5 года - 15%", "18,15"),
new Option("2 года - 10%", "24,10"), 
]

typesOptions = [
new Option("Пополняемый", "replenished"),
new Option("Срочный", "urgent")
]
function setOptionsToSelect(select, options)
{
  	for(let i = 0; i < options.length; i++)
  		select.options[i] = options[i];
  	for(let i = options.length; i < select.options.length;)
  		select.options[i] = null;
}
document.getElementById("typeOfDeposit").onchange = function ()
{	
	let sender = document.getElementById("typeOfDeposit");
	let comboBox = document.getElementById('depositTerm');
	switch(sender.value) {
  		case 'urgent':  		
  			setOptionsToSelect(comboBox, urgentOptions);
    	break;
    	case 'replenished':
			setOptionsToSelect(comboBox, replenishedOptions);
    	break;
	}
}
document.getElementById("typeOfDeposit").onfocus = function ()
{
	let sender = document.getElementById("typeOfDeposit");
	if(sender.value == "default")
	{
		setOptionsToSelect(sender, typesOptions);
		onChangedTypeOfDeposit(sender);
	}
}
document.getElementById("buttonStart").onclick = function ()
{
	let sum = document.getElementById("textSum").value.trim();
	let depositTerm = document.getElementById("depositTerm");
	let typeOfDeposit = document.getElementById("typeOfDeposit");

	if(depositTerm.options[0].value=="default" || typeOfDeposit.options[0].value=="default")
	{
		alert("Необходимо выбрать условия вклада!");
		return;
	}
	if(isNaN(sum))
	{
		alert("Вы ввели не число!");
		return;
	}
	let values = depositTerm.value.split(',');
	document.getElementById("resultText").value = "Вклад \"" + typeOfDeposit.options[typeOfDeposit.selectedIndex].text 
	+ "\" на срок " + values[0] + " месяцев, на сумму " + sum + " руб.\nпод годовую ставку " + values[1] + "%.\n\nВ конце срока вы получите "
	+ (Number(sum) + sum * values[0] / 12 * values[1] / 100) + " руб.";
}
