class CreateArticle < Scrivener
  attr_accessor :title, :body, :tags

  def validate
    assert_present :title
    assert_present :body
  end
end
