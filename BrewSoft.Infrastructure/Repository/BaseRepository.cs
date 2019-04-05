using BrewSoft.Domain.Entities;
using BrewSoft.Domain.Interfaces;
using BrewSoft.Infrastructure.Context;
using System.Collections.Generic;
using System.Linq;

namespace BrewSoft.Infrastructure.Repository
{
    public class BaseRepository<T> : IRepository<T> where T : BaseEntity
    {
        private readonly BrewSoftContext _context;

        public BaseRepository(BrewSoftContext context)
        {
            _context = context;
        }

        public void Insert(T obj)
        {
            _context.Set<T>().Add(obj);
            _context.SaveChanges();
        }

        public void Update(T obj)
        {
            _context.Entry(obj).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            _context.Set<T>().Remove(Select(id));
            _context.SaveChanges();
        }

        public IList<T> Select()
        {
            return _context.Set<T>().ToList();
        }

        public T Select(int id)
        {
            return _context.Set<T>().Find(id);
        }
    }
}