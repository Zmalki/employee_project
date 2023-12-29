using Microsoft.EntityFrameworkCore;

namespace WorkerAPI.Models
{
    public class WorkerDetailContext : DbContext
    {
        public WorkerDetailContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<WorkerDetail> PaymentDetails { get; set; }
    }
}
