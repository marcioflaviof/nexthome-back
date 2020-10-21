INSERT INTO [nexthome].[dbo].[houses]
(
      [cod_user]
      ,[landSize]
      ,[price]
      ,[address]
      ,[description]
      ,[number_bedroom]
      ,[number_bath]
      ,[to_sell]

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
   , @to_sell

);

SELECT SCOPE_IDENTITY() AS id;