SELECT * FROM [dbo].[visits]
WHERE [cod_house] = @cod_house
AND [is_deleted] = 0;
