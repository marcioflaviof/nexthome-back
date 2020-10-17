INSERT INTO [nexthome].[dbo].[houses]
(
      [cod_user]
      ,[landSize]
      ,[price]
      ,[address]
      ,[description]
      ,[number_bedroom]
      ,[number_bath]

)
VALUES
(
   @cod_user
   , @landSize
   , @price
   , @address
   , @description
   , @number_bedroom
   , @number_bath

);

SELECT SCOPE_IDENTITY() AS id;