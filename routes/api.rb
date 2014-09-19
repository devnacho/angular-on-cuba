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
          [
            { title: "foo", body: "bar" },
            { title: "baz", body: "biz" }
          ]
        end
      end

      on get, ':id' do |id|
        json do
          { title: "foo", body: "bar" }
        end
      end

      on post, root do
        res.status = 204
        json do
          {}
        end
      end

    end
  end

end
