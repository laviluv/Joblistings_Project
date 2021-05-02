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


        // PUT api/<JoblistingsController>
        [HttpPut("{id}")]
        public async Task<IActionResult> EditJoblisting(Guid id, Joblisting joblisting)
        {
            joblisting.Id = id;
            return Ok(await Mediator.Send(new Edit.EditCommand { Joblisting = joblisting }));
        }


        // DELETE api/<JoblistingsController>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJoblisting(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.DeleteCommand { Id = id }));
        }
    }
}
