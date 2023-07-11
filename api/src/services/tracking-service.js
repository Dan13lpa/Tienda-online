const db = require('../models');
const Tracking = db.Tracking;

module.exports = class TrackingService {

    registrarAccion = async (id, ip, recurso, metodo, codigo) => {
        try {
            await Tracking.create({
                userId: id,
                ip,
                recurso,
                metodo,
                codigo
            });

            return true;

        } catch (error) {
        console.error('Error al registrar la acción:', error);
        
        return false;
        }
    }
}
