using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DynamicSliderApp.Controllers
{
    public class NumberController : ApiController
    {
        // GET: api/Number/max_value
        public int Get(int value)
        {
            int res = new Random().Next(value+1);
            return res;
        }
    }
}
