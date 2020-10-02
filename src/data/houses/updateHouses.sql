UPDATE [dbo].[houses]
SET    [landSize] = @landSize
      ,[price] = @price
      ,[address] = @address
      ,[description] = @description
WHERE   [id] = @id;


SELECT  [id]
      ,[landSize]
      ,[price]
      ,[address]
      ,[description]

FROM    [dbo].[houses]
WHERE   [id] = @id;
