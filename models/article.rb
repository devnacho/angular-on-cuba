class Article < Ohm::Model
  include Ohm::Timestamps
  attribute :title
  attribute :body

  def to_hash
    super.merge title: title,
                body: body,
                created_at: created_at.iso8601,
                updated_at: updated_at.iso8601
  end
end
