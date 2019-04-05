using BrewSoft.Domain.Entities;
using BrewSoft.Infrastructure.Mapping;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace BrewSoft.Infrastructure.Context
{
    public class BrewSoftContext : DbContext
    {
        public BrewSoftContext(DbContextOptions options) : base(options)
        {
        }

        public virtual DbSet<Brasseur> User { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Brasseur>(new UserMap().Configure);
        }
    }
}