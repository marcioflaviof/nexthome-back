UPDATE [dbo].[tb_local]
SET     [name] = @name
       , [modified_at] = CURRENT_TIMESTAMP
WHERE   [id] = @id
