
CREATE DATABASE [Vehicle]
GO
USE [Vehicle]

CREATE TABLE [dbo].[Vehicle](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Brand] [nvarchar](max) NULL,
	[Color] [nvarchar](max) NULL,
	[Transmission] [nvarchar](max) NULL,
	[Pathimg] [nvarchar](max) NULL,
 CONSTRAINT [PK_Vehicle] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

 INSERT INTO [dbo].[Vehicle]
           ([Brand]
           ,[Color]
           ,[Transmission]
           ,[Pathimg])
     VALUES
('Kia',	'Amarillo',	'Automatico',	'C:img')

INSERT INTO [dbo].[Vehicle]
           ([Brand]
           ,[Color]
           ,[Transmission]
           ,[Pathimg])
     VALUES
('Chevrolet',	'Azul',	'Mecanico',	'C:\img')

 INSERT INTO [dbo].[Vehicle]
           ([Brand]
           ,[Color]
           ,[Transmission]
           ,[Pathimg])
     VALUES
('Renault',	'Amarillo',	'Mecanico',	'C:\img')

 INSERT INTO [dbo].[Vehicle]
           ([Brand]
           ,[Color]
           ,[Transmission]
           ,[Pathimg])
     VALUES
('Ford',	'Verde',	'Automatico',	'C:\img')
GO


