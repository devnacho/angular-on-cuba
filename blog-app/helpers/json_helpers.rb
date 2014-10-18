module JsonHelpers

  def json(object, status: nil)
    res.headers.merge! "Content-Type" => "application/json"
    res.write JSON.dump(object)
    res.status = status unless status.nil?
  end

end
