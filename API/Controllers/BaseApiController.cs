using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class BaseAPIController : ControllerBase
    {

         //v0.0.1 Add dbcontext to make sure the joblistings can be listed from the db
    //temporary fix beacuse the controller does not need to know the dbcontext

        //v0.0.2 injecting MediatR instead of the dbcontext
    
       // private readonly JobDbContext _context;
        private  IMediator mediator;

        //v0.0.3 added the MEdiatR service to get the data 
        protected IMediator Mediator => mediator ??= HttpContext.RequestServices.GetService<IMediator>();
    }


    /*
// POST api/<BaseApiController>
[HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<BaseApiController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<BaseApiController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    */
}
