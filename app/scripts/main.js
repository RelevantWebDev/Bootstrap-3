'use strict';
// make nav menus with flyouts activate on hover
$('ul.nav li.dropdown').hover(function () {
		$('.dropdown-menu', this).fadeIn();
	}, function () {
		$('.dropdown-menu', this).fadeOut('fast');
	});