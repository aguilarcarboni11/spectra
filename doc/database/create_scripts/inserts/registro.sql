INSERT INTO public."Registro"(
	"CodigoRegistro", "Observaciones", "Muestra", "CondicionCielo", "Wavelength", "IDFormulario", "ZonaFormulario", "FechaFormulario", "TipoFormulario", "IDInformacion", "Calibracion")
	VALUES (9, 'Blanco', '3', 'Lluvioso', ARRAY[1,2,3,4,5,6,7,8,9,10], 36, 'San Jose', '2023-06-07', 'Planta', '4', 'TRUE');
	
SELECT *
FROM "Registro"