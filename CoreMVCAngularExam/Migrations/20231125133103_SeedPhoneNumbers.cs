using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CoreMVCAngularExam.Migrations
{
    /// <inheritdoc />
    public partial class SeedPhoneNumbers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
SET IDENTITY_INSERT [dbo].[PhoneNumber] ON
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (2, N'89875675655')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (3, N'89873435453')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (4, N'89876554554')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (5, N'89864656376')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (6, N'89875647234')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (7, N'89875645635')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (8, N'89876453453')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (9, N'89874556456')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (10, N'89875645453')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (11, N'89875645345')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (12, N'89874545546')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (13, N'89867587587')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (14, N'89875454342')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (15, N'89875453423')
INSERT INTO [dbo].[phoneNumber] ([phone_id], [phone_number]) VALUES (16, N'89876566556')
SET IDENTITY_INSERT [dbo].[PhoneNumber] OFF
");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
