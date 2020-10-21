SELECT min_hour_available, max_hour_available FROM [dbo].[ta_available]
WHERE [cod_house] = @cod_house
AND [is_deleted] = 0;