SELECT * FROM [dbo].[visits]
WHERE [id] = @id
AND NOT [is_deleted];