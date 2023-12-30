using Microsoft.EntityFrameworkCore;

namespace WorkerAPI.Models
{
    public class WorkerDetailContext : DbContext
    {
        //Initializes a new instance of the class
        public WorkerDetailContext(DbContextOptions options) : base(options)
        {
        }
        /// Gets or sets the DbSet for managing worker details in the database
        public DbSet<WorkerDetail> PaymentDetails { get; set; }
    }
}
