using System;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Person
    {
        public int PersonId { get; set; }

        [MaxLength(64)]
        [MinLength(1)]
        [Required]
        public string FirstName { get; set; }

        [MaxLength(64)]
        [MinLength(1)]
        [Required]
        public string LastName { get; set; }
    }
}