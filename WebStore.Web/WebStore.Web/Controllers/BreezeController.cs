using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Breeze.WebApi;
using WebStore.Web.Models;

namespace WebStore.Web.Controllers
{
    [BreezeController]
    public class BreezeController : ApiController
    {
        private readonly EFContextProvider<WebStoreDbContext> _contextProvider =
            new EFContextProvider<WebStoreDbContext>();

        [HttpGet]
        public string Metadata()
        {
            return _contextProvider.Metadata();
        }

        [HttpGet]
        public IQueryable<Client> Clients()
        {
            return _contextProvider.Context.Clients;
        }

        [HttpGet]
        public IQueryable<Product> Products()
        {
            return _contextProvider.Context.Products;
        }
    }
}