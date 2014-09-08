require 'cuba'
require "cuba/render"

Cuba.plugin Cuba::Render
Cuba.settings[:render][:template_engine] = "haml"

Dir["./lib/**/*.rb"].each     { |rb| require rb }
Dir["./models/**/*.rb"].each  { |rb| require rb }

Cuba.define do
  on get, 'admin' do
    res.write view("/admin")
  end
end
