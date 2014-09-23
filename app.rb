require 'cuba'
require "cuba/render"
require 'json'
require 'rack/parser'
require "ohm"
require "ohm/json"
require "ohm/contrib"
require "scrivener"
require 'sass/plugin/rack'

Cuba.plugin Cuba::Render
Cuba.settings[:render][:template_engine] = "haml"

Cuba.use Sass::Plugin::Rack
Cuba.use Rack::Parser


Dir["./lib/**/*.rb"].each     { |rb| require rb }
Dir["./models/**/*.rb"].each  { |rb| require rb }
Dir["./routes/**/*.rb"].each  { |rb| require rb }

Cuba.define do
  on 'admin' do
    run Admin
  end

  on 'api' do
    run Api
  end

  on 'js_partials' do
    run JsPartials
  end

  on default do
    run Blog
  end
end
