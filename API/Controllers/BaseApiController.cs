using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class BaseAPIController : ControllerBase
    {
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
