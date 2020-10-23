INSERT INTO [nexthome].[dbo].[tb_local]
(
    [name]

)
VALUES
(
   @name
);

SELECT SCOPE_IDENTITY() AS id;