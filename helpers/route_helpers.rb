module RouteHelpers

  def json(object = nil)
    res.headers.merge! "Content-Type" => "application/json"
    result = block_given? ? yield : object
    res.write JSON.dump(result)
  end

end
