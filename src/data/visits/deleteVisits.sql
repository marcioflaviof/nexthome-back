 UPDATE [dbo].[visits]
SET     [is_deleted] = 1

WHERE   [id] = @id

SELECT  [id]

FROM    [dbo].[visits]
WHERE   [id] = @id;