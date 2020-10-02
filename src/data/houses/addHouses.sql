INSERT INTO [nexthome].[dbo].[houses]
(
    [landSize]
      ,[price]
      ,[address]
      ,[description]

)
VALUES
(
   @landSize
   , @price
   , @address
   , @description

);

SELECT SCOPE_IDENTITY() AS id;