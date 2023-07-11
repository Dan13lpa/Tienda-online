const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const db = require('../models');
const ImageConfiguration = db.ImageConfiguration;
const Image = db.Image;

module.exports = class ImageService {

  uploadImage = async (images) => {

    const result = [];

    for(const file of images.file){
      
      const filename = file.originalname.replace(/[\s_]/g, '-');
      const tmpFilePath = path.join(__dirname, `../storage/tmp/${file.originalname}`);
      let { name } = path.parse(filename);

      const newFilename = await fs.access(path.join(__dirname, `../storage/images/gallery/original/${name}.webp`)).then(async () => {
        const date = new Date().getTime();
        return `${name}-${date}`;
      }).catch(async err => {
        return name;
      });

      try {
        await sharp(tmpFilePath)
          .webp({ lossless: true })
          .toFile(path.join(__dirname, `../storage/images/gallery/original/${newFilename}.webp`));

        await sharp(tmpFilePath)
          .resize(135, 135)
          .webp({ lossless: true })
          .toFile(path.join(__dirname, `../storage/images/gallery/thumbnail/${newFilename}.webp`));

        await fs.unlink(tmpFilePath);

        result.push(`${newFilename}.webp`);

      } catch (error) {
        console.error('Error al procesar el archivo:', error);
      }
    };

    return result;
  };


  resizeImages = async (entity, entityId, images) => {
    images.forEach(async (image) => {
      try {
        const imageConfigurations = await ImageConfiguration.findAll({
          where: {
            entity,
            name: image.name
          }
        });

        imageConfigurations.forEach(configuration => {
          const { widthPx, heightPx } = configuration;
        });

      } catch (error) {
       
      }
    });
  };

  deleteImages = async (filename) => {
    
  };

  getThumbnails = async (limit, offset) => {
    
  };
};
