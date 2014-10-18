class Api < Cuba
  define do

    on 'articles' do
      on root do
        on get do
          json Article.all.sort_by(:created_at, order: "DESC")
        end

        on post do
          article = Article.create slice(req.params, :title, :body, :tags, :published)
          json article, status: 201
        end
      end

      on ':id' do |id|
        article = Article[id]

        on get, root do
          json article
        end

        on put, root do
          article.update slice(req.params, :title, :body, :tags, :published)
          json article
        end

        on delete, root do
          article.delete

          res.status = 204
        end
      end
    end

  end
end
