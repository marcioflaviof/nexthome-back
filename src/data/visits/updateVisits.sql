UPDATE [dbo].[visits]
SET     [day_hour_visit] = @day_hour_visit
       , [is_confirmed] = @is_confirmed
       , [modified_at] = CURRENT_TIMESTAMP
WHERE   [id] = @id;
