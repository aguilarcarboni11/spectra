
-- Table: public.Informacion

-- DROP TABLE IF EXISTS public."Informacion";

CREATE TABLE IF NOT EXISTS public."Informacion"
(
    "NumeroPlanta" integer,
    "EstadoFenologico" character varying(200) COLLATE pg_catalog."default",
    "EstadoFitosanitario" character varying(200) COLLATE pg_catalog."default",
    "IDFormulario" integer,
    "ZonaFormulario" character varying(200) COLLATE pg_catalog."default",
    "FechaFormulario" date,
    "TipoFormulario" character varying(200) COLLATE pg_catalog."default",
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( CYCLE INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    CONSTRAINT "UNInformacion" UNIQUE ("ZonaFormulario", "FechaFormulario", "TipoFormulario", "ID", "IDFormulario"),
    CONSTRAINT "FKInformacion" FOREIGN KEY ("IDFormulario", "ZonaFormulario", "FechaFormulario", "TipoFormulario")
        REFERENCES public."Formulario" ("ID", "Zona", "Fecha", "Tipo") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Informacion"
    OWNER to postgres;