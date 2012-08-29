var Item = function(id,nome,status) {
    this.id = id;
    this.nome = nome;
    if(status !== null) {
        this.status = KO(Boolean(status));
    } else {
        this.status = KO(false);
    }
    this.selecionado = KO(false);
    this.textoSelecao = KO(function() {
        if(this.selecionado() === true) {
            return "<i class='icon-star icon-white'></i> Selecionado";
        } else {
            return "<i class='icon-star'></i> Selecionar";
        }
    },this);
    this.statusTexto = KO(function(){
        if(this.status() === true) {
            return "resolvido";
        } else {
            return "pendente";
        }
    },this);
};