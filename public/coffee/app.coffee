VM =
  todoItens: KO []
  adicionarItem: ->
    if VM.itemNovo() isnt ""
      itemExistente = _.find VM.todoItens(), (item) -> item.nome is VM.itemNovo()
      if itemExistente?
        alert "Já existe um item com este nome!"
      else
        $.post "#{BASE}/itens/criar",{nome: VM.itemNovo()},(r) ->
          VM.todoItens.push new Item(r.id,VM.itemNovo())
          VM.itemNovo ""
    else
      alert "Digite o nome do item!"
  selecionarItem: (item) -> item.selecionado !item.selecionado()
  removerItem: (item) ->
    $.post "#{BASE}/itens/remover",{id: item.id},(r) ->
      VM.todoItens.remove (_item) -> item.id isnt _item.id
  removerItens: ->
    ids = []
    _.each VM.todoItens(), (item) -> if !item.selecionado() then ids.push item.id
    $.post "#{BASE}/itens/remover",{id: ids},(r) ->
      VM.todoItens.remove (_item) -> !item.selecionado()
  mudarStatusItem: (item) ->
    $.post "#{BASE}/itens/mudar_status",{id: item.id},(r) ->
      item.status !item.status()
  itemNovo: KO ""

VM.existeSelecao = KO ->
  item = _.find VM.todoItens(),(item) -> !item.selecionado()
  item?