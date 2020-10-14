UPDATE [dbo].[houses]
SET    [landSize] = @landSize
      ,[price] = @price
      ,[address] = @address
      ,[description] = @description
      , [modified_at] = CURRENT_TIMESTAMP
WHERE   [id] = @id
AND [cod_user] = @cod_user;

SELECT  [id]
      ,[landSize]
      ,[price]
      ,[address]
      ,[description]

FROM    [dbo].[houses]
WHERE   [id] = @id
AND [cod_user] = @cod_user;