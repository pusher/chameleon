class MyCustomCommand < Jekyll::Command
  class << self

    # As the docs get precompiled before being sent up to jekyll,
    # and they sit inside Chameleon, the images folder needs to be
    # copied into the docs repo.
    def init_with_program(prog)
      prog.command(:build) do |c|
      puts "hello world"
       FileUtils.cp_r '../images', 'images'
      end
    end

  end
end
