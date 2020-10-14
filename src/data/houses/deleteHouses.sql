 UPDATE [dbo].[houses]
SET     [is_deleted] = 1

WHERE   [id] = @id
AND [cod_user] = @cod_user;

SELECT  [id]

FROM    [dbo].[houses]
WHERE   [id] = @id
AND [cod_user] = @cod_user;