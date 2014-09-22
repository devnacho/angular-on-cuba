class Article < Ohm::Model
  attribute :title
  attribute :body

  def to_hash
    {
      id: id,
      title: title,
      body: body
    }
  end
end
