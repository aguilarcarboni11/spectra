-- Table: public.Formulario

-- DROP TABLE IF EXISTS public."Formulario";

CREATE TABLE IF NOT EXISTS public."Formulario"
(
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( CYCLE INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "Tipo" character varying(200) COLLATE pg_catalog."default" NOT NULL,
    "Fecha" date NOT NULL,
    "Anotador" character varying(200) COLLATE pg_catalog."default",
    "Genero" character varying(200) COLLATE pg_catalog."default",
    "Especie" character varying(200) COLLATE pg_catalog."default",
    "Edad" integer,
    "Zona" character varying(200) COLLATE pg_catalog."default" NOT NULL,
    "Descripcion" character varying(200) COLLATE pg_catalog."default",
    "NombreComun" character varying(200) COLLATE pg_catalog."default",
    "Punto" geometry,
    CONSTRAINT "Formulario_pkey" PRIMARY KEY ("ID", "Tipo", "Fecha", "Zona"),
    CONSTRAINT "UNFormulario" UNIQUE ("ID", "Tipo", "Fecha", "Zona")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Formulario"
    OWNER to postgres;
