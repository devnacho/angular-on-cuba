class Article < Ohm::Model
  include Ohm::Timestamps
  attribute :title
  attribute :body
  attribute :tags
  index :tagged

  def to_hash
    super.merge title: title,
                body: body,
                tags: tags,
                tagged: tagged,
                created_at: created_at.iso8601,
                updated_at: updated_at.iso8601
  end

  def tagged
    tags.to_s.split(/\s*,\s*/).uniq
  end
end
