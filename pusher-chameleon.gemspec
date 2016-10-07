$:.push File.expand_path("../lib", __FILE__)

require "pusher-chameleon/version"

Gem::Specification.new do |s|
  s.name         = "pusher-chameleon"
  s.version      = PusherChameleon::VERSION
  s.summary      = 'Pusher Chameleon front-end asset library'
  s.description  = 'Chameleon holds various front-end assets that are shared across our products'
  s.authors      = ['Alex Pate']
  s.email        = 'ap@pusher.com'
  s.homepage     = 'https://github.com/pusher/chameleon'
  s.license      = 'MIT'

  s.add_dependency "sass", ">= 3.2.0"
  s.add_development_dependency "gem_publisher", "1.3.1"
  s.add_development_dependency "rake", "0.9.2.2"

  s.require_paths = ["lib", "app"]
  s.files         = `git ls-files`.split($\) - %w(.gitignore docs gulpfile.js Rakefile)
end
