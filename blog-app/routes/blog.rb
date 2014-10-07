class Blog < Cuba

  define do

    on root do
      res.write view("blog/blog_app")
    end

  end

end
