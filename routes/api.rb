class Api < Cuba

  define do

    on 'articles' do
      on get, root do
        articles = Article.find(published: true)

        on param("tag") do |tag|
          json articles.find(tags: tag).sort_by(:published_at, order: "DESC")
        end

        on default do
          json articles.sort_by(:published_at, order: "DESC")
        end
      end

      on get ':id' do
        json Article[id]
      end
    end

    on 'admin' do
      run Api::Admin
    end

  end

end
