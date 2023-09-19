INSERT INTO public."Formulario"(
	"Tipo", "Fecha", "Anotador", "Genero", "Especie", "Edad", "Zona", "Descripcion", "NombreComun", "Punto")
	VALUES ('Planta', '2023-06-08', 'Heileen', 'Floreado', 'Arbol', 2,'Cartago', 'Dato de prueba', 'Roble', ST_GeomFromText('POINT(-83.7535 9.7489)', 4326))


SELECT * FROM "Formulario"