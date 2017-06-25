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
end