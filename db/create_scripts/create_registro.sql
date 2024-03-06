
-- Table: public.Registro

-- DROP TABLE IF EXISTS public."Registro";

CREATE TABLE IF NOT EXISTS public."Registro"
(
    "CodigoRegistro" integer,
    "Observaciones" character varying(200) COLLATE pg_catalog."default",
    "Muestra" integer,
    "CondicionCielo" character varying(200) COLLATE pg_catalog."default",
    "Wavelength" integer[],
    "IDFormulario" integer,
    "TipoFormulario" character varying(200) COLLATE pg_catalog."default",
    "ZonaFormulario" character varying(200) COLLATE pg_catalog."default",
    "FechaFormulario" date,
    "IDInformacion" integer,
    "ID" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( CYCLE INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "Calibracion" boolean,
    CONSTRAINT "UNRegistro" UNIQUE ("IDFormulario", "TipoFormulario", "ZonaFormulario", "IDInformacion", "ID", "FechaFormulario"),
    CONSTRAINT "FKRegistro" FOREIGN KEY ("IDFormulario", "TipoFormulario", "ZonaFormulario", "FechaFormulario", "IDInformacion")
        REFERENCES public."Informacion" ("IDFormulario", "TipoFormulario", "ZonaFormulario", "FechaFormulario", "ID") MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Registro"
    OWNER to postgres;