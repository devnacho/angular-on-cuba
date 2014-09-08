class Admin < Cuba

  define do

    on get do
      res.write view("/admin")
    end

  end

end
