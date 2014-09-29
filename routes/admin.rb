class Admin < Cuba

  settings[:render][:views] = File.expand_path("../views/admin", __dir__)

  define do

    on get do
      res.write view("admin_app")
    end

  end

end
