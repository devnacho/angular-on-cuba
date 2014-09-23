class Article < Ohm::Model
  include Ohm::Timestamps
  attribute :title
  attribute :body
  attribute :tags
  index :tag

  def to_hash
    super.merge title: title,
                body: body,
                tags: tag,
                created_at: created_at.iso8601,
                updated_at: updated_at.iso8601
  end

  def tag
    tags.to_s.split(/\s*,\s*/).uniq
  end
end
