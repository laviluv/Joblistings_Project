using DataLayer;
using Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace App.Joblistings
{
    public class Details
    {
        //Query handle for getting job details, takes in the parameter id
        public class Query : IRequest<Joblisting>
        {
            public Guid Id { get; set; }
        }

        //create the handle that uses the query 
        public class Handler : IRequestHandler<Query, Joblisting>
        {
            private readonly JobDbContext context;

            public Handler(JobDbContext context)
            {
                this.context = context;
            }

            public async Task<Joblisting> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Joblistings.FindAsync(request.Id);
            }
        }
    }
}
