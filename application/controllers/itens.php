<?php
class Itens_Controller extends Base_Controller {

    public function action_remover() {
        $id = Input::get("id");
        if(is_array($id)) {
            Item::where_in("id",$id)->delete();
        } else {
            Item::find(Input::get("id"))->delete();
        }
        return Response::json(array("status" => "OK"));
    }

    public function action_criar() {
        $item = new Item;
        $item->nome = Input::get("nome");
        if($item->save()) {
            return Response::json(array("id" => $item->id));
        } else {
            return Response::json(array("status" => "ERROR"));
        }
    }

    public function action_mudar_status() {
        $item = Item::find(Input::get("id"));
        $item->status = !$item->status;
        $item->save();
        return Response::json(array("id" => $item->id));
    }
}
?>
