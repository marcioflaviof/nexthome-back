UPDATE [dbo].[users]
SET     [username] = @username
       , [email] = @email
       , [password] = @password
       , [cellphone] = @cellphone
       , [cpf] = @cpf
       , [address] = @address
WHERE   [id] = @id
 AND   [username] = @username;

SELECT  [id]
       , [username]
       , [email]
       , [password]
       , [cellphone]
       , [cpf]
       , [address]
FROM    [dbo].[users]
WHERE   [id] = @id
 AND   [username] = @username;