using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WorkerAPI.Migrations
{
    /// <inheritdoc />
    public partial class firstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PaymentDetails",
                columns: table => new
                {
                    WorkerDetailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Workerfirstame = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    WorkerlastName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Workerbirthday = table.Column<DateOnly>(type: "date", nullable: false),
                    stardate = table.Column<DateOnly>(type: "date", nullable: false),
                    salary = table.Column<string>(type: "nvarchar(5)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentDetails", x => x.WorkerDetailId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PaymentDetails");
        }
    }
}
