source 'http://rubygems.org'

gem 'rails', '3.0.3'
gem 'pg'
gem 'haml'
gem 'haml-rails'
gem 'will_paginate', '>= 3.0.pre2'
gem 'friendly_id'
gem 'jquery-rails'
gem 'devise'
gem 'compass'
gem 'rails_admin', :git => 'git://github.com/sferik/rails_admin.git'
gem 'automatic_foreign_key'
gem 'validates_timeliness', '~> 3.0.2'
gem 'geokit'
gem 'content_blocks', '>= 0.3.0', :path => '/home/sensei/code/content_blocks' #:git => 'git://github.com/pawelpacana/content_blocks'
gem 'cells'
gem 'simple_form'

group :test, :development do
  gem 'rspec-rails', '>= 2.0.0'
  gem 'capybara'
  gem 'steak'
  gem 'factory_girl_rails'
  gem 'mongrel'
  if RUBY_VERSION < '1.9'
    gem 'ruby-debug'
  else
    gem 'ruby-debug19'
  end
end

group :test do
  gem 'rspec'
  gem 'database_cleaner'
  gem 'time_travel'
  gem 'email_spec'
end

group :development do
  gem 'rvm'
  gem 'awesome_print', :require => 'ap'
  gem 'bond'
  gem 'what_methods'
  gem 'wirble'
  gem 'hirb'
  gem 'irb_callbacks'
  gem 'interactive_editor'
  gem 'autotest-rails'
  gem 'test_notifier'
end
