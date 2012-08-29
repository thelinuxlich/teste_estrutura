var assert = buster.assert;
var BASE = "http://localhost";
function alert() {}
buster.testCase("Funcionalidades To-Do!", {
    setUp: function() {
        this.xhr = sinon.fakeServer.create();
        VM.todoItens([]);
        this.xhr.respondWith([200, { "Content-Type": "application/json" },
                                 '{"id": 1}']);
    },
    tearDown: function () {
        this.xhr.restore();
    },
    "Adicionar itens": function(){
        VM.itemNovo("Lavar a louça");
        VM.adicionarItem();
        this.xhr.respond();
        assert(VM.todoItens().length > 0);
    },
    "Não permitir dois itens com o mesmo nome": function(){
        VM.itemNovo("Lavar a louça");
        VM.adicionarItem();
        this.xhr.respond();
        VM.itemNovo("Lavar a louça");
        VM.adicionarItem();
        this.xhr.respond();
        expect(VM.todoItens().length).toBe(1);
    },
    "Mudar status do item quando requisitado": function(){
        VM.itemNovo("Lavar a louça");
        VM.adicionarItem();
        this.xhr.respond();
        VM.mudarStatusItem(VM.todoItens()[0]);
        this.xhr.respond();
        expect(VM.todoItens()[0].status()).toBe(true);
        VM.mudarStatusItem(VM.todoItens()[0]);
        this.xhr.respond();
        expect(VM.todoItens()[0].status()).toBe(false);
    },
    "Remover um item quando requisitado": function(){
        VM.itemNovo("Lavar a louça");
        VM.adicionarItem();
        this.xhr.respond();
        expect(VM.todoItens().length).toBe(1);
        VM.removerItem(VM.todoItens()[0]);
        this.xhr.respond();
        expect(VM.todoItens().length).toBe(0);
    },
    "Remover itens selecionados": function(){
        VM.itemNovo("Lavar a louça");
        VM.adicionarItem();
        this.xhr.respond();
        VM.itemNovo("Lavar a roupa");
        VM.adicionarItem();
        this.xhr.respond();
        VM.itemNovo("Arrumar a cama");
        VM.adicionarItem();
        this.xhr.respond();
        VM.todoItens()[0].selecionado(true);
        VM.todoItens()[2].selecionado(true);
        VM.removerItens();
        this.xhr.respond();
        expect(VM.todoItens().length).toBe(1);
        expect(VM.todoItens()[0].nome).toBe("Lavar a roupa");
    }
});
