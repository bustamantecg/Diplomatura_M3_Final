/* export function renderizarSuperheroe(superheroe) {
    return {
      _id: superheroe._id,
      Nombre: superheroe.nombreSuperHeroe,
      "Nombre Real": superheroe.nombreReal,
      Edad: superheroe.edad,
      "Planeta de Origen": superheroe.planetaOrigen,
      Debilidad: superheroe.debilidad,
      Poderes: superheroe.poderes,
      Aliados: superheroe.aliados,
      Enemigos: superheroe.enemigos,
      Alta: superheroe.createdAt
    };
  }
  
  export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
  }
*/
  //************ */
  export function renderizandoSuperheroe(superheroe) {
    const fechaAlta = new Date(superheroe.createdAt).toLocaleString('es-AR', {
      weekday: 'long',  // Día de la semana (opcional)
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });
    return {
      _id: superheroe._id,
      Nombre: superheroe.nombreSuperHeroe,
      Identidad: superheroe.nombreReal, // Cambiar "Nombre Real" por "Identidad"
      Edad: superheroe.edad,
      Planeta: superheroe.planetaOrigen, // Cambiar "Planeta de Origen" por "Planeta"
      Debilidad: superheroe.debilidad,
      Poderes: superheroe.poderes,
      Aliados: superheroe.aliados,
      Enemigos: superheroe.enemigos,
      //Alta: superheroe.createdAt
      Alta: fechaAlta 
    };
  }

  export function renderizandoListaSuperheroes(superheroes) {
    return superheroes.map(superheroe => renderizandoSuperheroe(superheroe));
  }