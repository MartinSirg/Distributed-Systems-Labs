using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Domain.Identity
{
    public class AppUser : IdentityUser<int>
    {
        public List<Person> Persons { get; set; }
    }
}