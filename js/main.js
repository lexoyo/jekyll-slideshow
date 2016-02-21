
$(function () {
	$('button.embed').click(function () {
		$(this.parentNode).children('.embed-pane').toggle();
		return false;
	});
});