INSERT INTO [nexthome].[dbo].[visits]
(
      [cod_user]
      ,[cod_house]
      ,[hour_visit]
      ,[day_visit]
      ,[is_confirmed]
)
VALUES
(
   @cod_user
   , @cod_house
   , @hour_visit
   , @day_visit
   , @is_confirmed
);

SELECT SCOPE_IDENTITY() AS id;