class Article < Ohm::Model
  include Ohm::Timestamps
  include Ohm::DataTypes
  attribute :title
  attribute :body
  attribute :tags, Type::Array
  index :tags

  def to_hash
    super.merge title: title,
                body: body,
                tags: tags,
                created_at: created_at.iso8601,
                updated_at: updated_at.iso8601
  end

end
