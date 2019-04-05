using BrewSoft.Domain.Entities;
using FluentValidation;
using System;

namespace BrewSoft.Service.Validators
{
    public class BrasseurValidator : AbstractValidator<Brasseur>
    {
        public BrasseurValidator()
        {
            RuleFor(c => c)
                .NotNull()
                .OnAnyFailure(x =>
                {
                    throw new ArgumentNullException("Can't found the object.");
                });

            RuleFor(c => c.Prenom)
                .NotEmpty().WithMessage("Le prénom est obligatoire.")
                .NotNull().WithMessage("Le prénom est obligatoire.");

            RuleFor(c => c.Nom)
                .NotEmpty().WithMessage("Le nom est obligatoire.")
                .NotNull().WithMessage("Le nom est obligatoire.");

            RuleFor(c => c.Email)
                .NotEmpty().WithMessage("L'email est obligatoire.")
                .NotNull().WithMessage("L'email est obligatoire.");

            RuleFor(c => c.Tel)
                .NotEmpty().WithMessage("Le télephone est obligatoire.")
                .NotNull().WithMessage("Le télephone est obligatoire.");
        }
    }
}