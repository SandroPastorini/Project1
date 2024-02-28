using Microsoft.EntityFrameworkCore;
using Project1;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddControllers();
builder.Configuration
    .SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("C:\\Users\\sandr\\AppData\\Roaming\\Microsoft\\UserSecrets\\3fcc5d80-0612-4514-a4b2-88dfdcdfa092\\secrets.json");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseNpgsql(builder.Configuration.GetConnectionString("taller-postgres-connection")));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    builder.Services.AddCors(opt =>
    {
        opt.AddPolicy("CORS", policy =>
        {
            policy.WithOrigins("http://localhost:44433")
            .AllowAnyHeader()
            .AllowCredentials()
            .AllowAnyMethod();
        });
    });
}

app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");


app.MapFallbackToFile("index.html"); ;

app.MapControllers();

app.Run();
