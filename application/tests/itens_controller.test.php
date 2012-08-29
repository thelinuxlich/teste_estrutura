<?php
require('controller_test_case.php');

class Itens_Controller_Test extends ControllerTestCase {

	public function setUp() {
		DB::table("itens")->delete();
	}

	public function testSalvarItem() {
		$response = $this->post("itens@criar",array("nome" => "Foo"));
		$this->assertContains('{"id":',$response->content);
	}

	public function testNaoPodeSalvarDoisItensComOMesmoNome() {
		$response = $this->post("itens@criar",array("nome" => "Foo"));
		$response = $this->post("itens@criar",array("nome" => "Foo"));
		$this->assertContains('ERROR',$response->content);
	}
}
?>