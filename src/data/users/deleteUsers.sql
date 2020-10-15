 UPDATE [dbo].[users]
SET     [is_deleted] = 1

WHERE   [id] = @id
 AND   [email] = @email;
