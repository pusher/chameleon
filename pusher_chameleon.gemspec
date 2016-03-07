$:.push File.expand_path("../lib", __FILE__)

require "pusher_chameleon/version"

Gem::Specification.new do |s|
  s.name         = "pusher_chameleon"
  s.version      = PusherChameleon::VERSION
  s.summary      = 'Gem wrapper around Chameleon to integrate with Rails'
  s.authors      = ['Alex Pate']
  s.email        = 'alex.pate@pusher.com'
  s.homepage     = 'https://github.com/pusher/chameleon'
  s.license      = 'MIT'

  s.add_dependency "rails", ">= 3.1.0"
  s.add_dependency "sass", ">= 3.2.0"
  s.add_development_dependency "gem_publisher", "1.3.1"
  s.add_development_dependency "rake", "0.9.2.2"

  s.require_paths = ["lib", "app"]
  s.files         = `git ls-files`.split($\)
end
