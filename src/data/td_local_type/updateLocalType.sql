UPDATE [dbo].[td_local_type]
SET     [name] = @name
       , [modified_at] = CURRENT_TIMESTAMP
WHERE   [id] = @id
