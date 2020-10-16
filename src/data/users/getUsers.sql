SELECT * FROM [dbo].[users]
WHERE [id] = @id
AND [is_deleted] = 0;