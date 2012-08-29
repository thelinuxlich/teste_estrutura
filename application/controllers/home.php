<?php

class Home_Controller extends Base_Controller {
	public function action_index()
	{
        Asset::add("item","js/viewmodels/item.js");
        Asset::add("application","js/app.js");
		$this->layout->content = View::make('home.index',array("itens" => Item::all()));
	}

    public function action_sobre() {
		$this->layout->content = View::make('home.about');
    }

    public function action_testes() {
        $this->layout = null;
        Asset::add("buster-js","http://busterjs.org/releases/latest/buster-test.js");
        Asset::add("sinon","js/sinon.js");
        Asset::add("item","js/viewmodels/item.js");
        Asset::add("application","js/app.js");
        Asset::add("testes","js/testes.js");
		return View::make('home.testes');
    }
}
