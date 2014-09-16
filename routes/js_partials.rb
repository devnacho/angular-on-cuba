class JsPartials < Cuba

  def js_partial(route)
    partial(File.join("/js_partials", route))
  end

  define do

    on get do
      res.write js_partial(env["PATH_INFO"])
    end

  end

end
