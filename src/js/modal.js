$(document).ready(function(){
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');
	var button_6 = $('#button_6');
	var button_5 = $('#button_5');
	var button_4 = $('#button_4');
	var button_3 = $('#button_3');
	var button_2 = $('#button_2');
	var button_1 = $('#button_1');
	button.on('click', function(){
		modal.addClass('modal_active')
	})
	button_6.on('click', function(){
		modal.addClass('modal_active')
	})
	button_5.on('click', function(){
		modal.addClass('modal_active')
	})
	button_4.on('click', function(){
		modal.addClass('modal_active')
	})
	button_3.on('click', function(){
		modal.addClass('modal_active')
	})
	button_2.on('click', function(){
		modal.addClass('modal_active')
	})
	button_1.on('click', function(){
		modal.addClass('modal_active')
	})
	close.on('click', function(){
		modal.removeClass('modal_active')
	})
})