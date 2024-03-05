CREATE TABLE [dbo].[Table]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [title] NVARCHAR(255) NOT NULL, 
    [description] NTEXT NULL, 
    [thumbnailUrl] NVARCHAR(255) NULL
)
