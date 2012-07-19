$(document).ready(function() {
	$('HTML').addClass('JS');

	// use plugin for create our checkboxes
	$('#first, #second, #third, #four, #five, #six, #seven').myCustomCheckbox({
		activate : {'first' : 5, 'second' : 2, 'third' : 13, 'four' : 11, 'five' : 1, 'six' : 2, 'seven' : 5}
	}).myCustomCheckbox('show');
});