class Blog < Cuba

  define do

    on root do
      res.write view("blog/app")
    end

  end

end
