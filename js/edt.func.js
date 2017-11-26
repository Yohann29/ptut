window.addEventListener('load', function(){

	var months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
	var days = ['Lu','Ma','Me','Je','Ve','Sa','Di'];
	var numberOfDays = [31,28,31,30,31,30,31,31,30,31,30,31];
	var realDate = new Date();
	var selectedMonth = realDate.getMonth();
	var selectedYear = realDate.getYear() <= 200 ? realDate.getYear() + 1900 : null;
	
	function createCalendar(date){
		var day = date.getDate();
		var month = date.getMonth() +1;
		var year = date.getYear() <= 200 ? date.getYear() + 1900 : null;
				
		if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
			numberOfDays[1] = 29;
		}
		
		var actualNumberOfDays = numberOfDays[date.getMonth()];
		var first = date;
		first.setDate(0);
		first.getDate() == 2 ? first.setDate(0) : null;
		
		var start = first.getDay();
		
		var tab = document.createElement('table');
		var thead = document.createElement('thead');
		var thr = tab.insertRow(-1);
		var th = document.createElement('th');
		th.setAttribute('colspan','7');
		
		var button = document.createElement('button');
		button.id = 'prevMonth';
		th.appendChild(button);
				
		var txt = document.createTextNode(months[month-1] + ' ' + year);
		th.appendChild(txt);
		
		var button = document.createElement('button');
		button.id = 'nextMonth';
		th.appendChild(button);
		
		thr.appendChild(th);
		thead.appendChild(thr);
		
		var thr = thead.insertRow(-1);
		for(var i = 0 ; i < 7 ; i++){
			var th = document.createElement('th');
			var txt = document.createTextNode(days[i]);
			th.appendChild(txt);
			thr.appendChild(th);
		}
		
		tab.appendChild(thead);
		
		var tbody = document.createElement('tbody');
		var tbr = document.createElement('tr');
		var numberOfColumns = 0;
		
		if(date.getMonth() == 0){
			var j = numberOfDays[11];
		} else {
			var j = numberOfDays[date.getMonth()];
		}
		
		for(var i = 0 ; i < start ; i++){
			var tbd = tbr.insertCell(0);
			tbd.appendChild(document.createTextNode(j));
			j--;
			numberOfColumns++;
		}
		
		for(var i = 1 ; i <= actualNumberOfDays ; i++){
			var tbd = tbr.insertCell(-1);
			
			var input = document.createElement('input');
			input.type = 'radio';
			input.name = 'date';
			input.id = year + '-' + month + '-' + (i < 10 ? '0' + i : i);
			if(i == realDate.getDate() && month == (realDate.getMonth() + 1) && year == (realDate.getYear() + 1900)){
				input.checked = true;
			}
			tbd.appendChild(input);
			var label = document.createElement('label');
			label.htmlFor = year + '-' + month + '-' + (i < 10 ? '0' + i : i);
			label.innerHTML = i;
			tbd.appendChild(label);
			
			numberOfColumns++;
			if(numberOfColumns == 7){
				tbody.appendChild(tbr);
				var tbr = document.createElement('tr');
				numberOfColumns = 0;
			}
			i == actualNumberOfDays ? tbody.appendChild(tbr) : null;
		}
		
		tab.appendChild(tbody);
		
		
		document.getElementById('calendar').append(tab);
		
	}
	
	createCalendar(new Date(selectedYear,selectedMonth));
	
	$(document).on('click', '#prevMonth, #nextMonth', function(){
		if($(this).attr('id') == 'prevMonth'){
			if(selectedMonth == 0){
				selectedMonth = 11;
				selectedYear -= 1;
			} else {
				selectedMonth -= 1;
			}
		} else if($(this).attr('id') == 'nextMonth') {
			if(selectedMonth == 11){
				selectedMonth = 0;
				selectedYear += 1;
			} else {
				selectedMonth += 1;
			}
		}
		$('#calendar *').remove();
		createCalendar(new Date(selectedYear,selectedMonth));
	});
	
	
});