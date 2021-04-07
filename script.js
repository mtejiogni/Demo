var nb1= 0.0;
var nb2= 0.0;
var op= ''; //l'operation a effectuée
var resultat= document.querySelector('#resultat');
resultat.setAttribute('disabled', '');
resultat.value= 0;

for(var i= 0; i< 10; i++) {
	document.querySelector('#btn_' + i).onclick= function() {
		if(isNaN(resultat.value + this.textContent) == false) {
			resultat.value= resultat.value + this.textContent;
		}
	}
}

document.querySelector('#btn_virgule').onclick= function() {
	if(isNaN(resultat.value + '.') == false) {
		resultat.value= resultat.value + '.';
	}
}

document.querySelector('#btn_plusoumoins').onclick= function() {
	if(isNaN('-' + resultat.value) == false) {
		resultat.value= '-' + resultat.value;
	}
	else {
		resultat.value= resultat.value.replace('-', '');
	}
}

document.querySelector('#btn_ce').onclick= function() {
	if(isNaN(resultat.value) == false && resultat.value != '') {
		resultat.value= resultat.value.substring(0, resultat.value.length-1);
	}
}

document.querySelector('#btn_off').onclick= function() {
	resultat.value= '';
	nb1= 0.0;
	nb2= 0.0;
	op= '';
	var buttons= document.querySelectorAll('.boutons button'); 
	var name= '';

	for(var i= 0; i< buttons.length; i++) {
		name= buttons[i].getAttribute('id');

		if(name != 'btn_on' && name != 'btn_off') {
			buttons[i].setAttribute('disabled', '');
		}
	}
}

document.querySelector('#btn_on').onclick= function() {
	resultat.value= 0;
	var buttons= document.querySelectorAll('.boutons button'); 
	var name= '';

	for(var i= 0; i< buttons.length; i++) {
		name= buttons[i].getAttribute('id');

		if(name != 'btn_on' && name != 'btn_off') {
			buttons[i].removeAttribute('disabled');
		}
	}
}

document.querySelector('#btn_addition').onclick= function() {
	if(isNaN(resultat.value) == false && resultat.value != '') {
		nb1= parseFloat(resultat.value);
		op= 'addition';
		resultat.value= '';
	}
	else {
		alert('Opération invalide');
	}
}

document.querySelector('#btn_soustraction').onclick= function() {
	if(isNaN(resultat.value) == false && resultat.value != '') {
		nb1= parseFloat(resultat.value);
		op= 'soustraction';
		resultat.value= '';
	}
	else {
		alert('Opération invalide');
	}
}

document.querySelector('#btn_multiplication').onclick= function() {
	if(isNaN(resultat.value) == false && resultat.value != '') {
		nb1= parseFloat(resultat.value);
		op= 'multiplication';
		resultat.value= '';
	}
	else {
		alert('Opération invalide');
	}
}

document.querySelector('#btn_division').onclick= function() {
	if(isNaN(resultat.value) == false && resultat.value != '') {
		nb1= parseFloat(resultat.value);
		op= 'division';
		resultat.value= '';
	}
	else {
		alert('Opération invalide');
	}
}

document.querySelector('#btn_egale').onclick= function() {
	if(isNaN(resultat.value) == false && resultat.value != '' && op != '') {
		nb2= parseFloat(resultat.value);

		if(op == 'addition') {
			resultat.value= nb1 + nb2;
		}
		else if(op == 'soustraction') {
			resultat.value= nb1 - nb2;
		}
		else if(op == 'multiplication') {
			resultat.value= nb1 * nb2;
		}
		else if(op == 'division' && nb2 != 0.0) {
			resultat.value= nb1 * nb2;
		}
		else {
			alert('Opération invalide');
		}
	}
	else {
		alert('Opération invalide');
	}
}