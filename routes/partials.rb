class Partials < Cuba

  def js_partial(route)
    partial(File.join("/partials", route))
  end

  define do

    on get do
      res.write js_partial(env["PATH_INFO"])
    end

  end

end
