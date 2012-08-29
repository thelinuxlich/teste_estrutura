<script>
    @foreach($itens as $item)
        VM.todoItens.push(new Item({{$item->id}},"{{$item->nome}}",{{$item->status}}));
    @endforeach
</script>
<form class="form-inline">
<legend>Lista de coisas a fazer</legend>
<input type="text" data-bind="value: itemNovo" placeholder="Digite a tarefa..." />
<button type="submit" class="btn" data-bind="click: adicionarItem">Adicionar</button>
</form>
<div data-bind="visible: todoItens().length === 0">
<small>Você não tem nenhuma tarefa cadastrada.</small>
</div>
<table class="table table-hover cursor" data-bind="visible: todoItens().length > 0">
    <thead>
        <th>#</th>
        <th>Nome</th>
        <th>Status</th>
        <th>Ações</th>
    </thead>
    <tbody data-bind="foreach: todoItens">
        <tr data-bind="css: {success: status() === true,info: status() === false}">
            <td data-bind="text: id"></td>
            <td data-bind="text: nome"></td>
            <td data-bind="text: statusTexto"></td>
            <td>
                <button class="btn btn-primary btn-small" data-bind="click: $root.mudarStatusItem"><i class="icon-pencil"></i> Mudar Status</button>
                <button class="btn btn-small" data-bind="click: $root.selecionarItem,css: {'btn-inverse': selecionado() === true},html: textoSelecao"></button>
                <button class="btn btn-danger btn-small" data-bind="click: $root.removerItem"><i class="icon-remove"></i> Excluir</button>
            </td>
        </tr>
    </tbody>
</table>
<button class="btn btn-danger" data-bind="click: removerItens,visible: existeSelecao">Excluir itens selecionados</button>
