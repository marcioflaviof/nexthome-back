SELECT * FROM [dbo].[tb_local]
WHERE [id] = @id
AND [is_deleted] = 0;