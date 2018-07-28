<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/voca/1.4.0/voca.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
 $("#html").text(v.escapeHtml('<p>wonderful world</p><h1>wonderful world</h1>'));
});
</script>
</head>
<body>
<div id="html"></div>
</body>
</html>
