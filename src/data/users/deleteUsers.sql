 UPDATE [dbo].[users]
SET     [is_deleted] = 1

WHERE   [id] = @id
 AND   [email] = @email;

SELECT  [id]

FROM    [dbo].[users]
WHERE   [id] = @id
 AND   [email] = @email;