const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')
const db = require('../models')
const ImageConfiguration = db.ImageConfiguration
const Image = db.Image

module.exports = class ImageService {

    uploadImage = async images => {

        const files = images.file

        files.forEach( async file => {

            const filename = file.originalname.replace(/[\s_]/g, "-")
            const tmpFilePath = path.join(__dirname, `../storage/tmp/${file.originalname}`)

            const {name} = path.parse(filename);

            const data = await sharp(tmpFilePath)
            .webp({ lossless: true })
            .toFile(path.join(__dirname,`../storage/images/gallery/original/${name}.webp`))

            

        })
    }

    resizeImages = async (entity, entityId, images) => {

    }

    deleteImages = async filename => {

    }

    getThumbnails = async (limit, offset) => {

    }
}