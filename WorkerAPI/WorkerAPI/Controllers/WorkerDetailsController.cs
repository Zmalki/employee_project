using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WorkerAPI.Models;

namespace WorkerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkerDetailsController : ControllerBase
    {
        private readonly WorkerDetailContext _context;

        public WorkerDetailsController(WorkerDetailContext context)
        {
            _context = context;
        }

        // GET: api/WorkerDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WorkerDetail>>> GetPaymentDetails()
        {
          if (_context.PaymentDetails == null)
          {
              return NotFound();
          }
            return await _context.PaymentDetails.ToListAsync();
        }

        // GET: api/WorkerDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WorkerDetail>> GetWorkerDetail(int id)
        {
          if (_context.PaymentDetails == null)
          {
              return NotFound();
          }
            var workerDetail = await _context.PaymentDetails.FindAsync(id);

            if (workerDetail == null)
            {
                return NotFound();
            }

            return workerDetail;
        }

        // PUT: api/WorkerDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWorkerDetail(int id, WorkerDetail workerDetail)
        {
            if (id != workerDetail.WorkerDetailId)
            {
                return BadRequest();
                

            }

            _context.Entry(workerDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WorkerDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/WorkerDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WorkerDetail>> PostWorkerDetail(WorkerDetail workerDetail)
        {
          if (_context.PaymentDetails == null)
          {
              return Problem("Entity set 'WorkerDetailContext.PaymentDetails'  is null.");
          }
            _context.PaymentDetails.Add(workerDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWorkerDetail", new { id = workerDetail.WorkerDetailId }, workerDetail);
        }

        // DELETE: api/WorkerDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkerDetail(int id)
        {
            if (_context.PaymentDetails == null)
            {
                return NotFound();
            }
            var workerDetail = await _context.PaymentDetails.FindAsync(id);
            if (workerDetail == null)
            {
                return NotFound();
            }

            _context.PaymentDetails.Remove(workerDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WorkerDetailExists(int id)
        {
            return (_context.PaymentDetails?.Any(e => e.WorkerDetailId == id)).GetValueOrDefault();
        }
    }
}
