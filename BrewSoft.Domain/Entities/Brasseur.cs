
using System;

namespace BrewSoft.Domain.Entities
{
    public class Brasseur : BaseEntity
    {
        public int Id { get; set; }
        public string Prenom { get; set; }
        public string Nom { get; set; }
        public string Tel { get; set; }
        public string Email { get; set; }
    }
}