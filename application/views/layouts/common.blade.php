<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Teste de Estrutura</title>
	<meta name="viewport" content="width=device-width">
    <script type="text/javascript">
        var BASE = "{{ URL::base() }}";
    </script>
    {{ Asset::styles() }}
    {{ Asset::scripts() }}
    <script>
        if(ko !== undefined && VM !== undefined) {
            $(function(){
                ko.applyBindings(VM);
            });
        }
    </script>
</head>
<body>
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
            <a class="brand" href="/">To-Do!</a>
            <ul class="nav">
              <li class="active"><a href="/">Principal</a></li>
              <li><a href="/sobre">Sobre</a></li>
              <li><a href="/testes">Testes</a></li>
            </ul>
        </div>
      </div>
    </div>
    </div>
    <div class="container main">
        <div class="wrapper">
            {{ $content }}
        </div>
        <div class="footer-wrapper">
            <footer>
                <small>This thing is copyleft, no rights reserved.</small>
            </footer>
        </div>
    </div>
</body>
</html>
