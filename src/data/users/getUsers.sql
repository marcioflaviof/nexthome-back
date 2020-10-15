SELECT * FROM [dbo].[users]
WHERE [id] = @id
AND NOT [is_deleted];