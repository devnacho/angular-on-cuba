class Api < Cuba

  def json(object = nil)
    res.headers.merge! "Content-Type" => "application/json"
    result = block_given? ? yield : object
    res.write JSON.dump(result)
  end

  define do
    on 'articles' do

      on root do
        on get do
          json Article.all
        end

        on post do
          article = Article.create title: req.params["title"],
                                  body: req.params["body"]

          res.status = 201
          json article
        end
      end

      on ':id' do |id|
        article = Article[id]

        on get do
          json article
        end

        on post do
          article.update(title: req.params["title"],
                         body: req.params["body"])

          json article
        end

        on delete do
          article.delete

          res.status = 204
        end
      end

    end
  end

end
