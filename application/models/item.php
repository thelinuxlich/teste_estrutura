<?php
    class Item extends Aware {
        public static $table = "itens";
        public static $rules = array(
        		"nome" => "required|unique:itens"
        	);
    }
?>
