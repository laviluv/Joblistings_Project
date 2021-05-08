using App.CommonCore;
using App.Joblistings;
using DataLayer;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class AppServices
    {
        public static IServiceCollection AllServices(this IServiceCollection services)
        {

            //localhost allow http requests through cors from the React app layer
            services.AddCors(
               opt => {
                   opt.AddPolicy("EnableCorsPolicy", options =>
                   {
                     options.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                      // options.AllowAnyMethod().AllowAnyHeader().WithOrigins("*");
                       //.WithMethods("GET")
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


            //indicates where MediatR can find the query handlers
            services.AddMediatR(typeof(List.Handler).Assembly);

            //specify where the mapping profiles are located and start the service
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            return services;

        }
    }

}
