var VM;

VM = {
  todoItens: KO([]),
  adicionarItem: function() {
    var itemExistente;
    if (VM.itemNovo() !== "") {
      itemExistente = _.find(VM.todoItens(), function(item) {
        return item.nome === VM.itemNovo();
      });
      if (itemExistente != null) {
        return alert("Já existe um item com este nome!");
      } else {
        return $.post("" + BASE + "/itens/criar", {
          nome: VM.itemNovo()
        }, function(r) {
          VM.todoItens.push(new Item(r.id, VM.itemNovo()));
          return VM.itemNovo("");
        });
      }
    } else {
      return alert("Digite o nome do item!");
    }
  },
  selecionarItem: function(item) {
    return item.selecionado(!item.selecionado());
  },
  removerItem: function(item) {
    return $.post("" + BASE + "/itens/remover", {
      id: item.id
    }, function(r) {
      return VM.todoItens.remove(function(_item) {
        return item.id !== _item.id;
      });
    });
  },
  removerItens: function() {
    var ids;
    ids = [];
    _.each(VM.todoItens(), function(item) {
      if (!item.selecionado()) {
        return ids.push(item.id);
      }
    });
    return $.post("" + BASE + "/itens/remover", {
      id: ids
    }, function(r) {
      return VM.todoItens.remove(function(_item) {
        return !item.selecionado();
      });
    });
  },
  mudarStatusItem: function(item) {
    return $.post("" + BASE + "/itens/mudar_status", {
      id: item.id
    }, function(r) {
      return item.status(!item.status());
    });
  },
  itemNovo: KO("")
};

VM.existeSelecao = KO(function() {
  var item;
  item = _.find(VM.todoItens(), function(item) {
    return !item.selecionado();
  });
  return item != null;
});
