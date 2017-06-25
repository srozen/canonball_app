
set :stage, :production

# Replace 127.0.0.1 with your server's IP address!
server '139.59.137.53', user: 'deploy', roles: %w{web app db}

#application information
set :branch,    "master"
set :deploy_to, "/home/deploy/canonball_app"
set :rails_env, "production"