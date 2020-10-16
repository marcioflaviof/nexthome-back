UPDATE [dbo].[ta_available]
SET     [min_hour_available] = @min_hour_available
       , [max_hour_available] = @max_hour_available
       , [day_week_available] = @day_week_available
       , [cad_dta_available] = @cad_dta_available
       , [modified_at] = CURRENT_TIMESTAMP
WHERE   [id_available_hour] = @id_available_hour
