import { body } from 'express-validator';

const superheroesValidaciones = () => [
  body('nombreSuperHeroe')
    .notEmpty().withMessage('El nombre del superhéroe es requerido')
    .isLength({ min: 3, max: 60 }).withMessage('El nombre del Superheroe debe tener entre 3 y 60 caracteres')
    .trim()
    .escape(),
  body('nombreReal')
    .notEmpty().withMessage('El nombre Real del superhéroe es requerido')
    .isLength({ min: 3, max: 60 }).withMessage('El nombre Real debe tener entre 3 y 60 caracteres')
    .trim()
    .escape(),
  body('edad')
    .notEmpty().withMessage('La edad en años es requerida')
    .isNumeric().withMessage('La edad en años debe ser numérica')
    .custom((value) => value >= 0).withMessage('La mínima edad en años es cero'),
    body('poderes')
    .notEmpty().withMessage('Poderes es un dato requerido, no puede estar vacío')
    .custom(value => {
      let poderesArray;
      // Verificar si el valor ya es un array o una cadena
      if (Array.isArray(value)) {
        poderesArray = value;
      } else if (typeof value === 'string') {
        poderesArray = value.split(',').map(p => p.trim()); // Convertir cadena en array
      } else {
        throw new Error('Poderes debe ser un array o una cadena separada por comas');
      }
  
      // Validar cada poder
      if (!poderesArray.every(p => p.length >= 3 && p.length <= 60)) {
        throw new Error('Cada poder debe tener entre 3 y 60 caracteres');
      }
  
      return true; // Si todo está bien, pasar la validación
    }),
];
  
export default superheroesValidaciones;