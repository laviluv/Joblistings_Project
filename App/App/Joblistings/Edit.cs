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
    public class Edit
    {
        public class EditCommand : IRequest
        {
            public Joblisting Joblisting { get; set; }
        }

        //create the handler
        public class Handler : IRequestHandler<EditCommand>
        {
            private readonly JobDbContext context;

            public Handler(JobDbContext context)
            {
                this.context = context;
            }

            public async Task<Unit> Handle(EditCommand request, CancellationToken cancellationToken)
            {
                var joblisting = await context.Joblistings.FindAsync(request.Joblisting.Id);

                //update all props => automapper

                joblisting.Title = request.Joblisting.Title ?? joblisting.Title;

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}
