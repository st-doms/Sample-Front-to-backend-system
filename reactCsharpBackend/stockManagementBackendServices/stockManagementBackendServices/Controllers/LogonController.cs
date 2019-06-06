using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using stockManagementBackendServices.Model;

namespace stockManagementBackendServices.Controllers
{
    [ApiController]
    public class LogonController : ControllerBase
    {

        [HttpGet("Logon")]
        public string GetHealth()
        {
            return "Hi I am a Web Service";
        }

        [EnableCors("_myAllowSpecificOrigins")]
        [HttpPost("Logon/userlogon")]
        public Responce LogonAction(User user)
        {
            System.Console.WriteLine("user " + user);
            user.email = null;
            User sample = new User("test1", "pword", null);
            Responce response = new Responce(sample.Equals(user));
            return response;
        }
    }
}
