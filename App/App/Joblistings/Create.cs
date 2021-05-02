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
    public class Create
    {

        //Mediator command. Doesn't return values, is just a command sent to the API
        public class CreateCommand : IRequest
        {
            public Joblisting Joblisting { get; set; }
        }

        public class Handler : IRequestHandler<CreateCommand>
        {
            private readonly JobDbContext context;

            //persists changes to the database
            public Handler(JobDbContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(CreateCommand request, CancellationToken cancellationToken)
            {
                //adds joblisting to memory
                context.Joblistings.Add(request.Joblisting);
                //persist to db
                await context.SaveChangesAsync();
                //return actual joblisting value for db persistance
                return Unit.Value;
            }
        }
    }
}
