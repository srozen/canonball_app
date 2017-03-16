Rails.application.routes.draw do
  root 'angular#app'
  get '*path' => 'angular#app'
end
