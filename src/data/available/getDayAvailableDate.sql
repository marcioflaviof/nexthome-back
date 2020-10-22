SELECT min_hour_available, max_hour_available, day_week_available FROM [dbo].[ta_available]
WHERE [cod_house] = @cod_house
AND [day_week_available] = DATEPART(WEEKDAY,@date)
AND [is_deleted] = 0;