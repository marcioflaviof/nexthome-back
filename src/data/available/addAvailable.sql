INSERT INTO [nexthome].[dbo].[ta_available]
(
      [cod_house]
      ,[min_hour_available]
      ,[max_hour_available]
      ,[day_week_available]

)
VALUES
(
   @cod_house
   , @min_hour_available
   , @max_hour_available
   , @day_week_available

);

SELECT SCOPE_IDENTITY() AS id;