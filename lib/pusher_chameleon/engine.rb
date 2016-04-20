module PusherChameleon
  module Rails
    class Engine < ::Rails::Engine

      initializer 'pusher_chameleon.assets.precompile' do |app|
        %w(stylesheets javascripts fonts).each do |sub|
          app.config.assets.paths << root.join(sub).to_s
        end
      end

    end
  end
end
