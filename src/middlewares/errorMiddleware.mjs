import { validationResult } from 'express-validator';

export const manejadorValidacionErrores = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    // Renderizar la vista de formulario con los errores
    return res.status(400).render('addSuperheroe', {
      errores: errores.array(), // Pasamos el array de errores a la vista
      datos: req.body, // Pasamos los datos enviados para mantenerlos en el formulario
    });
  }
  next();
};