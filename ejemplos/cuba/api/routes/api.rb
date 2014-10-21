class Api < Cuba
  define do

    on 'articles' do
      on root do

        # GET /articles
        on get do
          json Article.all.sort_by(:created_at, order: "DESC")
        end

        # POST /articles
        on post do
          params = slice(req.params, :title, :body, :tags, :published)
          article = Article.create params
          json article, status: 201
        end
      end

      on ':id' do |id|
        article = Article[id]

        # GET /articles/:id
        on get, root do
          json article
        end

        # PUT /articles/:id
        on put, root do
          params = slice(req.params, :title, :body, :tags, :published)
          article.update params
          json article
        end

        # DELETE /articles/:id
        on delete, root do
          article.delete

          res.status = 204
        end
      end
    end

  end
end
