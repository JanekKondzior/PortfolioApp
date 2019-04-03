using BackEnd.API.Models;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        //  public DbSet<Value> Values { get; set; } setting up for using models
    }
}