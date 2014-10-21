module PartialHelpers

  def render_partials(glob)
    Dir[glob].map do |path|
      view = path.sub(/^views\/(.+)\.erb$/, '\1')
      "<script type='text/ng-template' id='/#{view}'>#{partial(view)}</script>"
    end.join("\n")
  end

end
