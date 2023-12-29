using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WorkerAPI.Models
{
    public class WorkerDetail
    {
        [Key]
        public int WorkerDetailId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Workerfirstame { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string WorkerlastName { get; set; } = "";

        [Column(TypeName = "datetime")]
        public DateTime Workerbirthday { get; set; } = new DateTime();

        //mm/yy
        [Column(TypeName = "datetime")]
        public DateTime stardate { get; set; } = new DateTime();

        [Column(TypeName = "nvarchar(5)")]
        public string salary { get; set; } = "";
    }
}
