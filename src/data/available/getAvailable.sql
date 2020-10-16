SELECT * FROM [dbo].[ta_available]
WHERE [id_available_hour] = @id_available_hour
AND [is_deleted] = 0;