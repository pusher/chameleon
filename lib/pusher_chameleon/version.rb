require 'json'

module PusherChameleon
  VERSION =
    JSON.load(
      File.open(
        File.expand_path('../../../package.json', __FILE__)))['version']
end
