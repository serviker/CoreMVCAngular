using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CoreMVCAngularExam.Migrations
{
    /// <inheritdoc />
    public partial class SeedContacts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
            SET IDENTITY_INSERT [dbo].[Contact] ON
INSERT INTO [dbo].[Contact] ([contact_id], [firstName], [lastName], [category_id], [phone_id]) VALUES (1, N'Alex', N'Petrov', 2, 2)
INSERT INTO [dbo].[Contact] ([contact_id], [firstName], [lastName], [category_id], [phone_id]) VALUES (2, N'Anna', N'Sidorova', 1, 3)
INSERT INTO [dbo].[Contact] ([contact_id], [firstName], [lastName], [category_id], [phone_id]) VALUES (3, N'Alla', N'Sedakova', 1, 4)
INSERT INTO [dbo].[Contact] ([contact_id], [firstName], [lastName], [category_id], [phone_id]) VALUES (4, N'Misha', N'Gavrilov', 3, 5)
INSERT INTO [dbo].[Contact] ([contact_id], [firstName], [lastName], [category_id], [phone_id]) VALUES (5, N'Roma', N'Nikonov', 3, 6)
INSERT INTO [dbo].[Contact] ([contact_id], [firstName], [lastName], [category_id], [phone_id]) VALUES (6, N'Masha', N'Mihaylova', 4, 7)
INSERT INTO [dbo].[Contact] ([contact_id], [firstName], [lastName], [category_id], [phone_id]) VALUES (7, N'Akexa', N'Petrova', 2, 8)
INSERT INTO [dbo].[Contact] ([contact_id], [firstName], [lastName], [category_id], [phone_id]) VALUES (8, N'Olga', N'Sidorova', 1, 9)
INSERT INTO [dbo].[Contact] ([contact_id], [firstName], [lastName], [category_id], [phone_id]) VALUES (9, N'Maria', N'Gavrilova', 2, 10)
INSERT INTO [dbo].[Contact] ([contact_id], [firstName], [lastName], [category_id], [phone_id]) VALUES (10, N'Rima', N'Nikonova', 2, 11)
SET IDENTITY_INSERT [dbo].[Contact] OFF
");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
