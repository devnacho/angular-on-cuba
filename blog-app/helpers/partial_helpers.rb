module PartialHelpers

  def render_partials(glob)
    Dir[glob].each do |path|
      view = path.sub(/^views\/(.+)\.haml$/, '\1')
      haml_tag "script", partial(view), type: "text/ng-template", id: "/#{view}"
    end
  end

end
