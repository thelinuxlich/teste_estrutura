Item = (id,nome,status) ->
    @id = id
    @nome = nome
    @status = KO if status? then Boolean(status) else false
    @selecionado = KO false
    @textoSelecao = KO ->
        if @selecionado()
            "<i class='icon-star icon-white'></i> Selecionado"
        else
            "<i class='icon-star'></i> Selecionar"
    ,@
    @statusTexto = KO ->
        if @status() then "resolvido" else "pendente"
    ,@