
$(function () {
	$('a.embed').on('click', function () {
		$(this.parentNode).children('.embed-pane').toggle();
		return false;
	});
	$('.embed-input').on("click", function () {
    $(this).select();
	});
});