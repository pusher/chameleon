require 'fileutils'

class MyNewCommand < Jekyll::Command
  class << self

    # As the docs get precompiled before being sent up to jekyll,
    # and they sit inside Chameleon, the images folder needs to be
    # copied into the docs repo.
    if (!File.directory?('images'))
      FileUtils.cp_r '../images', 'images'
    end

    def init_with_program(prog)
      prog.command(:build) do |c|
        c.action do
          puts "hello world"
        end
      end
    end

  end
end