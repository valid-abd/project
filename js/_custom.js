document.addEventListener("DOMContentLoaded", function() {

//FORM
$(document).ready(function () {
	$('form').submit(function () {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			$('.thanks').addClass('is-show');
			$(this).find('input').val('');
			$('form').trigger('reset');
			$('.js-modal').removeClass('is-show');
			$('.js-modal-overlay').removeClass('is-show');
			$('.desktop').removeClass('js-no-scroll');
		});
		return false;
	});
});
//FORM

// MODALL
$('.js-open-modal').click(function(event) {
	event.preventDefault();
	var modalName = $(this).attr('data-modal');
	var modal = $('.js-modal[data-modal="' + modalName + '"]');
	modal.addClass('is-show');
	$('.js-modal-overlay').addClass('is-show');
	$('.desktop').addClass('js-no-scroll');
});
$('.js-modal-close').click(function() {
	$('.js-modal').removeClass('is-show');
	$('.js-modal-overlay').removeClass('is-show');
	$('.desktop').removeClass('js-no-scroll');
});
$('.js-modal-overlay').click(function() {
	$('.js-modal.is-show').removeClass('is-show');
	$('.desktop').removeClass('js-no-scroll');
	$(this).removeClass('is-show');
});
var linkArray = document.querySelectorAll('.js-open-modal');
var overlay = document.querySelector('.js-modal-overlay');
var crossArray = document.querySelectorAll('.js-modal-close');
linkArray.forEach(function(item) {
	item.addEventListener('click', function(event) {
		event.preventDefault();
		var modalName = this.getAttribute('data-modal');
		var modal = document.querySelector('.js-modal[data-modal="' + modalName +  '"]');
		modal.classList.add('is-show');
		overlay.classList.add('is-show');
	});
})
crossArray.forEach(function(cross) {
	cross.addEventListener('click', function() {
		var parent = this.parentNode;
		parent.classList.remove('is-show');
		overlay.classList.remove('is-show');
	});
});
});

$('#slider').slick({
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 100
});

var string = "'Megalodon' - это большая древняя акула жившая миллионы лет назад. Ее длина достигла до 15.5 метра, больше современной белой акулы в 4 раза. Мегалодон питался китами, динозаврами и другими крупными животными. Мегалодон жил несколько миллионов лет назад и возродился в информационном пространстве в виде самой мощной CRM системы.";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 0);
})();