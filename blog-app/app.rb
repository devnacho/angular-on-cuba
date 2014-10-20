require 'cuba'
require "cuba/render"
require 'json'
require 'rack/parser'
require "ohm"
require "ohm/json"
require "ohm/contrib"
require "scrivener"
require "shield"
require 'sass/plugin/rack'

Cuba.plugin Cuba::Render
Cuba.settings[:render][:template_engine] = "haml"

Cuba.use Sass::Plugin::Rack
Cuba.use Rack::Parser
Cuba.use Rack::Session::Cookie, key: 'my_blog',
                                secret: ENV.fetch("APP_SECRET")

Dir["./filters/**/*.rb"].each { |rb| require rb }
Dir["./helpers/**/*.rb"].each { |rb| require rb }
Dir["./models/**/*.rb"].each  { |rb| require rb }
Dir["./routes/**/*.rb"].each  { |rb| require rb }

Cuba.plugin JsonHelpers
Cuba.plugin Shield::Helpers

Cuba.define do

  on 'api' do
    run Api
  end

  on 'login' do
    on get do
      render 'login'
    end

    on post do
      email = req.params["email"]
      password = req.params["password"]

      if login(User, email, password)
        remember(86400)
        res.redirect '/admin'
      else
        render 'login'
      end
    end
  end

  on 'admin' do
    on authenticated(User) do
      run Admin
    end
    on default do
      res.redirect '/login'
    end
  end

  on default do
    run Blog
  end
end
