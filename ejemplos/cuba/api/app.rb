require 'cuba'
require 'json'
require 'rack/parser'
require 'ohm'
require 'ohm/json'
require 'ohm/contrib'

Dir["./helpers/**/*.rb"].each  { |rb| require rb }
Dir["./models/**/*.rb"].each   { |rb| require rb }
Dir["./routes/**/*.rb"].each   { |rb| require rb }

Cuba.use Rack::Parser

Cuba.plugin ApiHelpers

Cuba.define do

  on 'api' do
    run Api
  end

end
