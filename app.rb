require 'cuba'
require "cuba/render"

Cuba.plugin Cuba::Render
Cuba.settings[:render][:template_engine] = "haml"

Dir["./lib/**/*.rb"].each     { |rb| require rb }
Dir["./models/**/*.rb"].each  { |rb| require rb }
Dir["./routes/**/*.rb"].each  { |rb| require rb }

Cuba.define do
  on 'admin' do
    run Admin
  end

  on default do
    run Blog
  end
end
