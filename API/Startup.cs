using DataLayer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Joblistings
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        ////  readonly string EnableCorsPolicy = "_enableCorsPolicy";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();


            //add the dbcontext to the service startup container
            services.AddDbContext<JobDbContext>(options =>
          options.UseSqlServer(Configuration.GetConnectionString("JoblistingsDatabase")));





            //localhost allow http requests through cors from the React app layer
            services.AddCors(
               opt => {
                   opt.AddPolicy("EnableCorsPolicy", options =>
                   {
                       options.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                   });
               });



            //services.AddCors(options =>
            //{
            //    options.AddPolicy(name: EnableCorsPolicy,
            //                      builder =>
            //                      {
            //                          builder.WithOrigins(
            //                                              "http://localhost:3000");
            //                      });
            //});

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //MIDDLEWARE
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseCors("EnableCorsPolicy");

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
