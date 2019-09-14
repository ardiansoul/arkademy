<script>
	function is_username_valid(username) {
		var regex = /^[a-zA-Z]{1}[a-zA-Z0-9]{4,8}$/;
		return regex.test(username);
	}
	function is_password_valid(password) {
		var regex = /^[a-zA-Z0-9@#$%&*+]{8,}$/;
		return regex.test(password);
	}

</script>