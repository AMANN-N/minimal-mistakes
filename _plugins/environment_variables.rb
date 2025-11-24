# Plugin to expose environment variables to the `site` object in Liquid templates
# Usage: {{ site.env.VAR_NAME }}

module Jekyll
  class EnvironmentVariablesGenerator < Generator
    priority :highest

    def generate(site)
      site.config['env'] = ENV.to_h
    end
  end
end
