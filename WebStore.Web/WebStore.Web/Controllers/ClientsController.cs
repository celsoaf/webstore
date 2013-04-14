using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebStore.Web.Models;

namespace WebStore.Web.Controllers
{
    public class ClientsController : ApiController
    {
        private readonly WebStoreDbContext _ctx = new WebStoreDbContext();

        // GET api/<controller>
        public IEnumerable<object> Get()
        {
            return _ctx.Clients.Select(p => new
            {
                p.Id,
                p.Name
            });
        }

        protected override void Dispose(bool disposing)
        {
            //if(disposing)
            //    _ctx.Dispose();

            base.Dispose(disposing);
        }
    }
}