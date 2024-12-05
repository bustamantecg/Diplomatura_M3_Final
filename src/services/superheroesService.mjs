import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";
import SuperHero from "../models/SuperHero.mjs";

export async function obtenerSuperHeroePorId($id){
    return await SuperHeroRepository.obtenerId($id);
}

export async function obtenerTodosLosSuperHeroes() {
    return await SuperHeroRepository.obtenerTodos();
}

export async function buscarSuperHeroesPorAtributo(atributo, valor){
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperHeroesMayoresDe30(){
    return await SuperHeroRepository.obtenerMayoresDe30();
}

//----------- nuevas funciones  ------------------------------------------------------- 
export async function insertSuperHero(req, res){
    return await SuperHeroRepository.insertSuperHero(req, res);
}

export const insertarSuperHeroe = async (data) => {
    try {
      const nuevoSuperHeroe = new SuperHero(data);
      await nuevoSuperHeroe.save(); // Guardar en la base de datos
      return nuevoSuperHeroe; // Retornar el objeto guardado
    } catch (error) {
      throw new Error('Error al guardar el superhéroe: ' + error.message);
    }
  };
//-----------------------------------------------------------------------------------------

export const getSuperHeroeById = async (id) => {
    try {
      return await SuperHero.findById(id); // Busca en la base de datos
    } catch (error) {
      throw new Error('Error al obtener el superhéroe: ' + error.message);
    }
  };

  export const updateSuperHeroe = async (id, updateData) => {    
    try {
      return await SuperHero.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }); // Actualiza
    } catch (error) {
      throw new Error('Error al actualizar el superhéroe: ' + error.message);
    }
  };

//----------------------------------------------------------------------------------------------
export async function deleteSuperHeroes(req, res){
    try {
        return await SuperHeroRepository.eliminarSuperHeroe(req, res);
    } catch (error) {
        throw new Error("Error en el services al eliminar el Superheroe: " + error.message);
    }
}

export async function deleteByNameSuperHeroes(name){
    try {
        return await SuperHeroRepository.eliminarByNameSuperHeroe(name);
    } catch (error) {
        throw new Error("Error en el services al eliminar el Superheroe por su Nombre: " + error.message);
    }
}
//----------------------------------------------------------------------------------------------------------

export async function deleteSuperHeroe(id) {
    try {
      const deletedHeroe = await SuperHeroRepository.deleteSuperHeroeById(id);                                                     
      return deletedHeroe;
    } catch (error) {
      console.error('Error en el servicio al eliminar superhéroe:', error.message);
      throw new Error(error.message);
    }
  }