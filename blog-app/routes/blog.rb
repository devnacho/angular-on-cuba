class Blog < Cuba

  define do

    on get do
      res.write view("blog/app")
    end

  end

end
