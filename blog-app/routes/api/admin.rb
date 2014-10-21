require_relative '../api'
class Api::Admin < Cuba
  define do
    on authenticated(User) do
      on 'articles' do

        on root do
          on get do
            json Article.all.sort_by(:created_at, order: "DESC")
          end

          on post do
            publisher = Publisher.new req.params

            on publisher.valid? do
              article = Article.create publisher.attributes
              json article, status: 201
            end

            on default do
              json({errors: publisher.errors}, status: 422)
            end
          end
        end

        on ':id' do |id|
          article = Article[id]

          on get, root do
            json article
          end

          on put, root do
            publisher = Publisher.new req.params

            on publisher.valid? do
              article.update publisher.attributes
              json article
            end

            on default do
              json({errors: publisher.errors}, status: 422)
            end
          end

          on delete, root do
            article.delete

            res.status = 204
          end

          on post, "publish" do
            article.update published: true

            json article
          end
        end

      end
    end
  end
end
