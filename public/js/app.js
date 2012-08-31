VM = {
    todoItens: KO([]),
    adicionarItem: function() {
        if(VM.itemNovo() !== "") {
           var itemExistente = _.find(VM.todoItens(),function(item) {
                return item.nome === VM.itemNovo();
           });
           if(itemExistente !== null && itemExistente !== undefined) {
               alert("Já existe um item com este nome!");
           } else {
               $.post(BASE+"/itens/criar",{nome: VM.itemNovo()},function(r){
                   VM.todoItens.push(new Item(r.id,VM.itemNovo()));
                   VM.itemNovo("");
               });
           }
        } else {
            alert("Digite o nome do item!");
        }
    },
    selecionarItem: function(item) {
        item.selecionado(!item.selecionado());
    },
    removerItem: function(item) {
       $.post(BASE+"/itens/remover",{id: item.id},function(r){
            VM.todoItens.remove(function(_item){
                return item.id === _item.id;
            });
       });
    },
    removerItens: function() {
       var ids = [];
       _.each(VM.todoItens(), function(item){
            if(item.selecionado() === true) {
                ids.push(item.id);
            }
       });
       $.post(BASE+"/itens/remover",{id: ids},function(r){
            VM.todoItens.remove(function(_item){
                return _item.selecionado() === true;
            });
       });
    },
    mudarStatusItem: function(item) {
       $.post(BASE+"/itens/mudar_status",{id: item.id},function(r){
            item.status(!item.status());
       });
    },
    itemNovo: KO("")
};

VM.existeSelecao = KO(function(){
    var item = _.find(VM.todoItens(),function(item){
        return item.selecionado() === true;
    });
    return(item !== null && item !== undefined);
});