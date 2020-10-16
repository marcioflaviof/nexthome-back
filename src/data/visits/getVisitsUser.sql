SELECT * FROM [dbo].[visits]
WHERE [cod_user] = @cod_user
AND [is_deleted] = 0;