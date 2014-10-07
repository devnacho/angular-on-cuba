class Publisher < Scrivener
  attr_accessor :title, :body, :tags, :published

  def validate
    assert_present :title
    assert_present :body

    assert_tags
  end

  private
  def assert_tags
    error = [:tags, :invalid_format]
    assert tags.is_a?(Array), error
    tags.each do |tag|
      assert !tag.to_s.empty?, error
    end
  end
end
