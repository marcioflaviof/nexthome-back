SELECT * FROM [dbo].[houses]
WHERE [id] = @id
AND NOT [is_deleted];