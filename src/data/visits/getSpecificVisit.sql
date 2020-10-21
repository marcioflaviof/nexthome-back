SELECT * FROM [dbo].[visits]
WHERE [id] = @id
AND [cod_user] = @cod_user
AND [cod_house] = @cod_house
AND [is_deleted] = 0;