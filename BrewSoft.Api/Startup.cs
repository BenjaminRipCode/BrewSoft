using BrewSoft.Domain.Interfaces;
using BrewSoft.Infrastructure.Context;
using BrewSoft.Infrastructure.Repository;
using BrewSoft.Service.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace BrewSoft.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped(typeof(IService<>), typeof(BaseService<>));
            services.AddScoped(typeof(IRepository<>), typeof(BaseRepository<>));
            services.AddDbContext<BrewSoftContext>(options =>
            {
                options.UseSqlServer("Server=DESKTOP-U7IJJHO\\sqlexpress;User Id=usrBrewSoft;password=usrBrewSoft;Database=BrewSoft;Trusted_Connection=True;MultipleActiveResultSets=true",
                sqlServerOptionsAction: sqlOptions =>
                {
                    sqlOptions.EnableRetryOnFailure(
                    maxRetryCount: 10,
                    maxRetryDelay: TimeSpan.FromSeconds(30),
                    errorNumbersToAdd: null);
                });
            });

            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
