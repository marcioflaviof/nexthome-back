UPDATE [dbo].[houses]
SET    [landSize] = @landSize
      ,[price] = @price
      ,[address] = @address
      ,[description] = @description
      ,[number_bedroom] = @number_bedroom
      ,[number_bath] = @number_bath
      ,[to_sell] = @to_sell
      , [modified_at] = CURRENT_TIMESTAMP
WHERE   [id] = @id
AND [cod_user] = @cod_user;
