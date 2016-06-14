module CopyImagesDirectory
  class Generator < Jekyll::Generator

    # As the docs get precompiled before being sent up to jekyll,
    # and they sit inside Chameleon, the images folder needs to be
    # copied into the docs repo.
    def generate(site)

       # FileUtils.cp_r '../images', 'images'

    end
    
  end
end