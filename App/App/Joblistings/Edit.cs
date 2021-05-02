using AutoMapper;
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
            public IMapper Mapper { get; }

            public Handler(JobDbContext context, IMapper mapper)
            {
                this.context = context;
                Mapper = mapper;
            }

      

            public async Task<Unit> Handle(EditCommand request, CancellationToken cancellationToken)
            {

                //joblisting from the db type Joblisting
                var joblisting = await context.Joblistings.FindAsync(request.Joblisting.Id);

                //update all props => automapper (helps map obj with same type)

                //joblisting with joblisting type as well
                // joblisting.Title = request.Joblisting.Title ?? joblisting.Title;

                //using automapper
                Mapper.Map(request.Joblisting, joblisting);

                await context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}
