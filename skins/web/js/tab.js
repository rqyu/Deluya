$(document).ready(function() {
	$('ul.tabbed li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabbed li').removeClass('active');
		$('.news_content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});
});ch
