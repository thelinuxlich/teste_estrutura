<?php

class Base_Controller extends Controller {

	/**
	 * Catch-all method for requests that can't be matched.
	 *
	 * @param  string    $method
	 * @param  array     $parameters
	 * @return Response
	 */
    public $layout = "layouts.common";

	public function __call($method, $parameters)
	{
		return Response::error('404');
	}

    public function __construct()
    {
        //Assets
        Asset::add('jquery', 'js/jquery.js');
        Asset::add('bootstrap-js', 'js/bootstrap.min.js');
        Asset::add('knockout', 'js/knockout.js');
        Asset::add('helpers', 'js/helpers.js');
        Asset::add('lodash', 'js/lodash.js');
        Asset::add('bootstrap-css', 'css/bootstrap.min.css');
        Asset::add('style', 'css/style.css');
        parent::__construct();
    }
}
