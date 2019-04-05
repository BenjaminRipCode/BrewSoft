using System;
using BrewSoft.Domain.Entities;
using BrewSoft.Domain.Interfaces;
using BrewSoft.Service.Validators;
using Microsoft.AspNetCore.Mvc;

namespace BrewSoft.Api.Controllers
{
    [Produces("application/json")]
    public class BrasseurController : Controller
    {
        private IService<Brasseur> _service;

        public BrasseurController(IService<Brasseur> service)
        {
            _service = service;
        }

        public IActionResult Post([FromBody] Brasseur item)
        {
            try
            {
                _service.Post<BrasseurValidator>(item);

                return new ObjectResult(item.Id);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        public IActionResult Put([FromBody] Brasseur item)
        {
            try
            {
                _service.Put<BrasseurValidator>(item);

                return new ObjectResult(item);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        public IActionResult Delete(int id)
        {
            try
            {
                _service.Delete(id);

                return new NoContentResult();
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        
        [Route("api/brasseurs")]
        public IActionResult Get()
        {
            try
            {
                return new ObjectResult(_service.Get());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [Route("api/brasseur/{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return new ObjectResult(_service.Get(id));
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}