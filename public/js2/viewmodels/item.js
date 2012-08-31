var Item;

Item = function(id, nome, status) {
  this.id = id;
  this.nome = nome;
  this.status = KO(status != null ? Boolean(status) : false);
  this.selecionado = KO(false);
  this.textoSelecao = KO(function() {
    if (this.selecionado()) {
      return "<i class='icon-star icon-white'></i> Selecionado";
    } else {
      return "<i class='icon-star'></i> Selecionar";
    }
  }, this);
  return this.statusTexto = KO(function() {
    if (this.status()) {
      return "resolvido";
    } else {
      return "pendente";
    }
  }, this);
};
