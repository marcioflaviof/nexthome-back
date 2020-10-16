SELECT * FROM [dbo].[visits]
WHERE [id] = @id
AND [is_deleted] = 0;