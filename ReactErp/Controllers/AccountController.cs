using Microsoft.AspNetCore.Mvc;
using ReactErp.Models;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ReactErp.Controllers
{
    [Route("account")]
    public class AccountController : Controller
    {

        public class LoginModel
        {
            [Required]
            public string userId { get; set; }
            [Required]
            [PasswordPropertyText]
            public string password { get; set; }
            public string returnUrl { get; set; }
        }

        [HttpPost]
        [Route("login")]
        public ActionResult Login([FromBody] LoginModel login)
        {
            List<BranchModel> branches = new List<BranchModel>();
            List<DatabaseModel> databases = new List<DatabaseModel>();

            branches.Add(new BranchModel { br_code = "AB01", br_name = "Branch 1", cmp_code = "ABC" });
            branches.Add(new BranchModel { br_code = "AB02", br_name = "Branch 2", cmp_code = "ABC" });

            databases.Add(new DatabaseModel { catalog = "SME", name = "SME", id = 1 });
            databases.Add(new DatabaseModel { catalog = "DEMO", name = "DEMO", id = 2 });


            return Ok(new { branches, databases });
        }

    }
}
