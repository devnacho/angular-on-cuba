module ApiHelpers

  def json(object, status: nil)
    res.headers.merge! "Content-Type" => "application/json"
    res.status = status if status
    res.write JSON.dump(object)
  end

  def slice(hash, *attributes)
    attributes = attributes.map(&:to_s)
    hash.select { |k, _| attributes.include?(k) }
  end

end
