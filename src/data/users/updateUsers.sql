UPDATE [dbo].[users]
SET     [username] = @username
       , [email] = @email
       , [password] = @password
       , [cellphone] = @cellphone
       , [cpf] = @cpf
       , [address] = @address
       , [modified_at] = CURRENT_TIMESTAMP
WHERE   [id] = @id
 AND   [email] = @email;
