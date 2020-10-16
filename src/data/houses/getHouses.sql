SELECT * FROM [dbo].[houses]
WHERE [id] = @id
AND [is_deleted] = 0;