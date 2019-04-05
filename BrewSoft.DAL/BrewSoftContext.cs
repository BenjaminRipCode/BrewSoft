using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace BrewSoft.DAL.Models
{
    public class AbcDatabaseContext : DbContext
    {
        private IConfiguration _config;

        public AbcDatabaseContext(IConfiguration config) : base()
        {
            _config = config;
        }

        public virtual DbSet<Brasseur> Brasseurs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_config.GetConnectionString("BrewSoftDatabase"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Brasseur>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Prenom)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Nom)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Email)
                    .HasMaxLength(100);

                entity.Property(e => e.Tel)
                    .HasMaxLength(100);
            });
        }
    }
}