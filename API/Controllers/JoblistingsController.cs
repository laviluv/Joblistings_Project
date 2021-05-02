using DataLayer;
using Domain;
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

    { 

        //endpoints

        //gets all joblistings  -----  /joblistings
        [HttpGet]
        public async Task<ActionResult<List<Joblisting>>> GetJoblistings()
        {
            return await Mediator.Send(new List.Query());
        }

        //gets a specific joblisting based on its id ----- /joblistings/id
        [HttpGet("{id}")]

        public async Task<ActionResult<Joblisting>> GetJoblisting(Guid id)
        {

            //  return await _context.Joblistings.FindAsync(id);
            return await Mediator.Send(new Details.Query{ Id = id});

        }

        // POST api/<JoblistingsController>
        [HttpPost]
        public async Task<IActionResult> CreateJoblisting(Joblisting joblisting)
        {
            return Ok(await Mediator.Send(new Create.CreateCommand { Joblisting = joblisting }));
        }



       /*

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
