using Microsoft.EntityFrameworkCore;
using WorkerAPI.Models;
// Create a new web application builder
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Add controllers to the service container
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

// Add Swagger/OpenAPI documentation services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add Entity Framework Core DbContext for WorkerDetailContext with SQL Server connection
builder.Services.AddDbContext<WorkerDetailContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
// Enable Cross-Origin Resource Sharing (CORS) for a specific origin (http://localhost:4200)
app.UseCors(options =>
options.WithOrigins("http://localhost:4200")
.AllowAnyMethod()
.AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
