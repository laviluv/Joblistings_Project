using Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public class JobDbContext : DbContext
    {

        //added constructor for the options
        public JobDbContext(DbContextOptions<JobDbContext> options)
        : base(options)
        {
        }

        //added DbSet for joblistings
        public DbSet<Joblisting> Joblistings { get; set; }



    }
}
