INSERT INTO [nexthome].[dbo].[td_local_type]
(
    [name]
    , [cod_local_father]
    , [cod_type_local]
)
VALUES
(
   @name
   , @cod_local_father
   , @cod_type_local
);

SELECT SCOPE_IDENTITY() AS id;