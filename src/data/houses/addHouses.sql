INSERT INTO [nexthome].[dbo].[houses]
(
      [cod_user]
      ,[landSize]
      ,[price]
      ,[address]
      ,[description]

)
VALUES
(
   @cod_user
   , @landSize
   , @price
   , @address
   , @description

);

SELECT SCOPE_IDENTITY() AS id;