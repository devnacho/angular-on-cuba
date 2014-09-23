class Article < Ohm::Model
  attribute :title
  attribute :body

  def to_hash
    super.merge title: title,
                body: body

  end
end
