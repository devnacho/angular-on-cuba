class Admin < Cuba

  settings[:render][:layout] = "admin/layout"

  define do

    on get do
      res.write view("admin/app")
    end

  end

end
