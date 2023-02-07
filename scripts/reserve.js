
$(document).ready(function() {

	$("#reserve-form").submit(function( event ) {
		event.preventDefault();
		$.ajax({
			url: "https://tyradire.github.io/hello-brand/send.php",
			method: "post",
			dataType: 'html',
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#reserve-form").trigger("reset");
		});
		return false;
	});
		
});