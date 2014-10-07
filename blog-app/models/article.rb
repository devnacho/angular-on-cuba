class Article < Ohm::Model
  include Ohm::Timestamps
  include Ohm::DataTypes
  include Ohm::Callbacks

  attribute :title
  attribute :body
  attribute :tags, Type::Array
  attribute :published, Type::Boolean
  attribute :published_at, Type::Timestamp
  index :tags
  index :published

  def to_hash
    super.merge title: title,
                body: body,
                tags: tags,
                published: published,
                published_at: published_at && published_at.iso8601,
                created_at: created_at.iso8601,
                updated_at: updated_at.iso8601
  end

  def before_save
    if published
      self.published_at ||= Time.now.utc.to_i
    else
      self.published_at = nil
    end
  end

end
