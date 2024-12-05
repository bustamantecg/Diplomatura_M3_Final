import mongoose from "mongoose";

/*  export const connectDB = async () => {
  try {
    await mongoose.connect(        

      'mongodb+srv://Grupo-19:grupo19@cursadanodejs.ls9ii.mongodb.net/PracticaSuperHeroes?retryWrites=true&w=majority');
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.log('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};
*/
export const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://Grupo-18:grupo18@cursadanodejs.ls9ii.mongodb.net/Node-js', {
    });
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};

/*
export const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://Grupo-14:grupo14@cursadanodejs.ls9ii.mongodb.net/Node-js', {
    });
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};

*/


