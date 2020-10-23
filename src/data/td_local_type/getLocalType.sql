SELECT * FROM [dbo].[td_local_type]
WHERE [id] = @id
AND [is_deleted] = 0;