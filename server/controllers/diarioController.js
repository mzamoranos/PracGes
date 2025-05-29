exports.crearEntrada = async (req, res) => {
    const { fecha, horas, descripcion } = req.body;
    const dni = req.user.dni; // si el middleware auth extrae el dni del token
  
    try {
      await Diario.create({ fecha, horas, descripcion, dni });
      res.status(201).json({ message: 'Entrada registrada correctamente' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al guardar entrada en la base de datos' });
    }
  };

  exports.visualizarEntradas = async (req, res) => {

    const dni = req.user.dni; // si el middleware auth extrae el dni del token
  
    try {
      const entradas = await Diario.findAll({ where: { dni } });
  
      if (entradas.length === 0) {
        return res.status(404).json({ message: 'No se encontraron entradas para este alumno' });
      }
  
      res.status(200).json(entradas);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al recuperar las entradas de la base de datos' });
    }
  };