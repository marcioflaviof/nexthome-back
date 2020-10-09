DELETE  [dbo].[visits]
WHERE   [id] = @id
AND [cod_house] = @cod_house
AND [cod_user] = @cod_user;