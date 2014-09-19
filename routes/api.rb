class Api < Cuba

  def json(object = nil)
    res.headers.merge! "Content-Type" => "application/json"
    result = block_given? ? yield : object
    res.write JSON.dump(result)
  end

  define do
    on 'articles' do

      on get, root do
        json do
          Post.all.map(&:to_hash)
        end
      end

      on get, ':id' do |id|
        json do
          Post[id].to_hash
        end
      end

      on post, root do
        post = Post.create title: req.params["title"],
                           body: req.params["body"]

        json do
          post.to_hash
        end
      end

    end
  end

end
