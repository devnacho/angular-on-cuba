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
          json Article.all.sort_by(:created_at, order: "DESC")
        end

        on post do
          publisher = Publisher.new req.params

          on publisher.valid? do
            article = Article.create publisher.attributes
            res.status = 201
            json article
          end

          on default do
            res.status = 422
            json publisher.errors
          end
        end
      end

      on ':id' do |id|
        article = Article[id]

        on get do
          json article
        end

        on put do
          publisher = Publisher.new req.params

          on publisher.valid? do
            article.update publisher.attributes
            json article
          end

          on default do
            res.status = 422
            json publisher.errors
          end
        end

        on delete do
          article.delete

          res.status = 204
        end
      end

    end
  end

end
