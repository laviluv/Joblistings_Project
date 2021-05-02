using DataLayer;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace App.Joblistings
{
    public class Delete 
    {
        public class DeleteCommand : IRequest
        {
            //define the id of the joblisting to be deleted
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<DeleteCommand>
        {
            private readonly JobDbContext context;

            public Handler(JobDbContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(DeleteCommand request, CancellationToken cancellationToken)
            {
                //gets joblisting from db
                var joblisting = await context.Joblistings.FindAsync(request.Id);

                //remove joblisting from memory
                context.Remove(joblisting);

                //Save the changes
                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
