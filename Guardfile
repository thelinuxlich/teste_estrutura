guard 'sass', :input=> 'public/sass', :output => 'public/css2', :style => :compressed
guard 'coffeescript', :input => 'public/coffee', :output => 'public/js2',:bare => true
module ::Guard
  class ArtisanTest < Guard
  	def run_on_change(paths)
  	  ::Guard::UI.info("Running tests...")
  	  ::Guard::Notifier.notify("Running tests...",:title => "Laravel")
      output = `php artisan test`
      if output =~ /FAILURE/
	  	  ::Guard::Notifier.notify("Some tests failed!",:title => "Laravel",:image => :failed)
      else
	  	  ::Guard::Notifier.notify("All tests succeeded!",:title => "Laravel",:image => :success)
      end
    end
  end
end
guard 'artisan-test' do
	watch('(.+)\.php$')
end