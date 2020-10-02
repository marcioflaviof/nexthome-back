INSERT INTO [nexthome].[dbo].[users]
(
    [username]
      ,[email]
      ,[password]
      ,[cellphone]
      ,[cpf]
      ,[address]
)
VALUES
(
   @username
   , @email
   , @password
   , @cellphone
   , @cpf
   , @address

);

SELECT SCOPE_IDENTITY() AS id;