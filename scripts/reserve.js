
$(document).ready(function() {

	$("#reserve-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#reserve-form").trigger("reset");
		});
		return false;
	});
	
});