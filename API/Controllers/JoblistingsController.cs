using DataLayer;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.Joblistings;

namespace API.Controllers
{
    public class JoblistingsController : BaseAPIController





    //v0.0.1 Add dbcontext to make sure the joblistings can be listed from the db
    //temporary fix beacuse the controller does not need to know the dbcontext

        //v0.0.2 injecting MediatR instead of the dbcontext
    {
       // private readonly JobDbContext _context;
        private readonly IMediator mediator;

        //public JoblistingsController(JobDbContext context)
        //{
        //    _context = context;
        //}
        public JoblistingsController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        //endpoints

        //gets all joblistings  -----  /joblistings
        [HttpGet]
        public async Task<ActionResult<List<Joblisting>>> GetJoblistings()
        {
            return await mediator.Send(new List.Query());


        }

        //gets a specific joblisting based on its id ----- /joblistings/id
        [HttpGet("{id}")]

        public async Task<ActionResult<Joblisting>> GetJoblisting(Guid id)
        {

            //  return await _context.Joblistings.FindAsync(id);
            return Ok();

        }



        /*
        // POST api/<JoblistingsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<JoblistingsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<JoblistingsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        */

    }
}
