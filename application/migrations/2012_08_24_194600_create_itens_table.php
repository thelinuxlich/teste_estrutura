<?php

class Create_Itens_Table {

	/**
	 * Make changes to the database.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create("itens",function($table){
            $table->increments("id");
            $table->string("nome");
            $table->boolean("status")->default(false);
            $table->timestamps();
        });
	}

	/**
	 * Revert the changes to the database.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::drop("itens");
	}

}
