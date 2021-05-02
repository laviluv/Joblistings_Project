using Domain;
using System;
using System.Collections.Generic;
using System.Text;
using MediatR;
using System.Threading.Tasks;
using System.Threading;
using DataLayer;
using Microsoft.EntityFrameworkCore;

namespace App.Joblistings
{
    class List
    {

        //Query using MediatR
        public class Query : IRequest<List<Joblisting>>{}

        public class Handler : IRequestHandler<Query, List<Joblisting>>
        {

            //injects the dbcontext
            public Handler(JobDbContext context)
            {
                Context = context;
            }

            public JobDbContext Context { get; }

            public async Task<List<Joblisting>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await Context.Joblistings.ToListAsync();
            }
        }
    }
}
