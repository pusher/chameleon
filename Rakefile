lib = File.expand_path("../lib", __FILE__)
$:.unshift lib unless $:.include?(lib)

require "rake"
require "rubygems"
require "tmpdir"
require "jekyll"
require "pusher-chameleon/version"

GITHUB_REPONAME = "pusher/chameleon"
CHAMELEON_VERSION = PusherChameleon::VERSION

namespace :chameleon do
  desc "Publish to NPM"
  task :npm_publish do
    system "npm publish"
  end

  # If this fails, then you probably need to login first
  desc "Publish to RubyGems"
  task :gem_publish do
    system "gem build pusher-chameleon.gemspec"
    system "gem push pusher-chameleon-#{CHAMELEON_VERSION}.gem"
  end

  desc "Generate docs files"
  task :generate_docs do
    Dir.chdir "docs"
    Jekyll::Site.new(Jekyll.configuration({
      "source"      => ".",
      "destination" => "_site",
      "config"     => ["_config.yml","_config.production.yml"]
    })).process
  end

  desc "Generate and publish docs to gh-pages"
  task :publish => [:gem_publish, :npm_publish, :generate_docs] do
    Dir.mktmpdir do |tmp|
      cp_r "_site/.", tmp

      pwd = Dir.pwd
      message = "Docs version #{CHAMELEON_VERSION} - Released at #{Time.now.utc}"

      Dir.chdir tmp
      system "git init"
      system "git add ."
      system "git commit -m #{message.inspect}"
      system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
      system "git push origin master:refs/heads/gh-pages --force"

      Dir.chdir pwd
    end
  end
end