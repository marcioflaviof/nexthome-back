UPDATE [dbo].[visits]
SET     [hour_visit] = @hour_visit
       , [day_visit] = @day_visit
       , [is_confirmed] = @is_confirmed
       , [modified_at] = CURRENT_TIMESTAMP
WHERE   [id] = @id;
