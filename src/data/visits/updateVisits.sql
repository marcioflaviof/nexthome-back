UPDATE [dbo].[visits]
SET     [hour_visit] = @hour_visit
       , [day_visit] = @day_visit
       , [is_confirmed] = @is_confirmed
       , [modified_at] = CURRENT_TIMESTAMP
WHERE   [id] = @id;

SELECT  [id]
        , [cod_house]
        , [cod_user]
        , [hour_visit]
        , [day_visit]
        , [is_confirmed]
FROM    [dbo].[visits]
WHERE   [id] = @id;