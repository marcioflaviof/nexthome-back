 UPDATE [dbo].[ta_available]
SET     [is_deleted] = 1

WHERE   [id_available_hour] = @id_available_hour
AND [cod_house] = @cod_house
AND [day_week_available] = @day_week_available;
