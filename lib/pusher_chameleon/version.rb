module PusherChameleon
  def self.toolkit_version
    File.read(File.expand_path('../../VERSION.txt', File.dirname(__FILE__)))
  end
end
