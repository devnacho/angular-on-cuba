require 'json'
require 'cuba'
require 'rack/parser'

Cuba.use Rack::Parser

class Cuba
  def json(object)
    res.headers.merge! "Content-Type" => "application/json"
    res.write JSON.dump(object)
  end

  define do
    on get do
      json({ foo: "bar" })
    end

    on post do
      res.write req.params.inspect
    end
  end
end
