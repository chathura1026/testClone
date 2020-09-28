
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		function formvalidation() {
			var email=document.getElementById('email').value;

			var a=/[\da-zA-Z0-9._!]@[\da-zA-Z].[A-Za-z]/;


			

				if (a.test(email)) {
					alert("valid");
					return falese;
				}

				else{
					alert("email is not true");
					return false;
				}
		}
	</script>
</head>
<body>
	<h1>Enter email to Validate</h1>
	<form>

		<input type="text" name="" id="email"><br><br>

		<button type="Validate" value="Validate" onclick="formvalidation()">Validate</button>
	</form>
</body>
</html>