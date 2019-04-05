using BrewSoft.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BrewSoft.Infrastructure.Mapping
{
    public class UserMap : IEntityTypeConfiguration<Brasseur>
    {
        public void Configure(EntityTypeBuilder<Brasseur> builder)
        {
            builder.ToTable("Brasseur");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.Prenom)
                .IsRequired()
                .HasColumnName("Prenom");

            builder.Property(c => c.Nom)
                .IsRequired()
                .HasColumnName("Nom");

            builder.Property(c => c.Email)
                .HasColumnName("Email");

            builder.Property(c => c.Tel)
                .HasColumnName("Tel");
        }
    }
}