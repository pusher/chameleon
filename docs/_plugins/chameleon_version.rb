require 'json'

module ChameleonVersion
  class Generator < Jekyll::Generator
    def generate(site)

      site.data['chameleon_version'] = JSON.load(File.open(File.expand_path('../../../package.json', __FILE__)))['version']

    end
  end
end