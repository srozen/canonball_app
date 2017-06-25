source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.0.2'
gem 'pg'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.5'
gem 'bower-rails', '~> 0.11.0'
gem 'font-awesome-rails', '~> 4.7', '>= 4.7.0.1'
gem 'angular-rails-templates', '~> 1.0', '>= 1.0.2'
gem 'non-stupid-digest-assets'


group :development, :test do
  gem 'byebug', platform: :mri
  gem 'phantomjs', '~> 2.1', '>= 2.1.1.0'
  gem 'poltergeist', '~> 1.13'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'better_errors', '~> 2.1', '>= 2.1.1'
  gem 'binding_of_caller', '~> 0.7.2'

  gem 'capistrano', '~> 3.4', require: false
  gem 'capistrano-rails', require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano-rbenv', require: false
  gem 'capistrano-db-tasks', require: false
  gem 'capistrano3-puma', require: false
  gem 'capistrano-maintenance', '~> 1.0', require: false
  gem 'airbrussh', require: false
  gem 'highline', require: false
  gem 'capistrano-faster-assets', require: false
  gem 'thin', '~> 1.6', '>= 1.6.4'
end