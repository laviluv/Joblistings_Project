using DataLayer;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class JoblistingsController : BaseAPIController





    //Add dbcontext to make sure the joblistings can be listed from the db
    //temporary fix beacuse the controller does not need to know the dbcontext
    {
        private readonly JobDbContext _context;

        public JoblistingsController(JobDbContext context)
        {
            _context = context;
        }

        //endpoints

        //gets all joblistings  -----  /joblistings
        [HttpGet]
        public async Task<ActionResult<List<Joblisting>>> GetJoblistings()
        {
            return await _context.Joblistings.ToListAsync();


        }

        //gets a specific joblisting based on its id ----- /joblistings/id
        [HttpGet("{id}")]

        public async Task<ActionResult<Joblisting>> GetJoblisting(Guid id)
        {

            return await _context.Joblistings.FindAsync(id);

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
