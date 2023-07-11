const db = require("../../models");
const User = db.User;
const Op = db.Sequelize.Op;
const ImageService = require('../../services/image-service');
const TrackingService = require('../../services/tracking-service');
const { STATUS_CODES } = require('http');

exports.create = async (req, res) => {
  try {
    const data = await User.create(req.body);

    await new ImageService.resizeImages('user', data.id, req.body.images);

    await new TrackingService().registrarAccion(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);

    res.status(200).send(data);
    console.log(req)

  } catch (error) {

    console.log(error);

    res.status(500).send({
      message: error.errors || "Algún error ha surgido al insertar el dato."
    });
  }
};

exports.findAll = async (req, res) => {
    try {
      const { page = 1, size = 5, ...query } = req.query;
      const limit = parseInt(size);
      const offset = (page - 1) * limit;
  
      const whereStatement = {};
  
      for (const key in query) {
        if (query[key] !== '' && key !== 'page' && key !== 'size') {
          whereStatement[key] = { [Op.substring]: query[key] };
          console.log(whereStatement);
        }
      }
  
      const condition = Object.keys(whereStatement).length > 0 ? { [Op.and]: [whereStatement] } : {};
  
      const result = await User.findAndCountAll({
        where: condition,
        attributes: ['id', 'name', 'email'],
        limit: limit,
        offset: offset,
        order: [['createdAt', 'DESC']]
      });
  
      result.meta = {
        total: result.count,
        pages: Math.ceil(result.count / limit),
        currentPage: page
      };
  
      await new TrackingService().registrarAccion(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
      console.log('Código de estado:', res.statusCode);
      console.log('Descripción:', STATUS_CODES[res.statusCode]);
      console.log('Usuario trackeado correctamente.');
  
      res.status(200).send(result);
    } catch (error) {
      console.log('Error al trackear el usuario:', error);
      res.status(500).send({
        message: error.errors || "Algún error ha surgido al recuperar los datos."
      });
    }
  };

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await User.findByPk(id, {
      attributes: ['id', 'name', 'email']
    });

    if (data) {
      await new TrackingService().registrarAccion(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
      console.log('Código de estado:', res.statusCode);
      console.log('Descripción:', STATUS_CODES[res.statusCode]);
      console.log('Usuario trackeado correctamente.');

      res.status(200).send(data);
    } else {
      res.status(404).send({
        message: `No se puede encontrar el elemento con la id=${id}.`
      });
    }
  } catch (error) {
    console.log('Error al trackear el usuario:', error);
    res.status(500).send({
      message: "Algún error ha surgido al recuperar la id=" + id
    });
  }
};

exports.update = async (req, res) => {
    try {
      const id = req.params.id;
  
      const [num] = await User.update(req.body, {
        where: { id: id }
      });
  
      if (num === 1) {
        await new TrackingService().registrarAccion(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
        console.log('Código de estado:', res.statusCode);
        console.log('Descripción:', STATUS_CODES[res.statusCode]);
        console.log('Usuario trackeado correctamente.');
  
        res.status(200).send({
          message: "El elemento ha sido actualizado correctamente."
        });
      } else {
        res.status(404).send({
          message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
        });
      }
    } catch (error) {
      console.log('Error al trackear el usuario:', error);
      console.error('Error en el controlador:', error);
      res.status(500).send({
        message: "Algún error ha surgido al actualizar la id=" + id
      });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      const id = req.params.id;
  
      const num = await User.destroy({
        where: { id: id }
      });
  
      if (num === 1) {
        await new TrackingService().registrarAccion(req.userId, req.ip, req.originalUrl, req.method, res.statusCode);
        console.log('Código de estado:', res.statusCode);
        console.log('Descripción:', STATUS_CODES[res.statusCode]);
        console.log('Usuario trackeado correctamente.');
  
        res.status(200).send({
          message: "El elemento ha sido borrado correctamente"
        });
      } else {
        res.status(404).send({
          message: `No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`
        });
      }
    } catch (error) {
      console.log('Error al trackear el usuario:', error);
      console.error('Error en el controlador:', error);
      res.status(500).send({
        message: "Algún error ha surgido al borrar la id=" + id
      });
    }
  };
  
  
