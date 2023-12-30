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
            // Check if the PaymentDetails collection is null
            if (_context.PaymentDetails == null)
          {
              return NotFound();
          }
            // Return the list of WorkerDetails asynchronously
            return await _context.PaymentDetails.ToListAsync();
        }

        // GET: api/WorkerDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WorkerDetail>> GetWorkerDetail(int id)
        {
           // Check if the PaymentDetails collection is null

            if (_context.PaymentDetails == null)
          {
              return NotFound();
          }
            // Find the WorkerDetail with the specified id

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
            // Check if the provided id matches the WorkerDetailId in the request body
            if (id != workerDetail.WorkerDetailId)
            {
                return BadRequest();
                

            }
            // Mark the entity as modified and save changes
            _context.Entry(workerDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Check if the WorkerDetail with the specified id exists

                if (!WorkerDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            // Return a successful response with no content
            return NoContent();
        }

        // POST: api/WorkerDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WorkerDetail>> PostWorkerDetail(WorkerDetail workerDetail)
        {
            // Check if the PaymentDetails collection is null
            if (_context.PaymentDetails == null)
          {
              return Problem("Entity set 'WorkerDetailContext.PaymentDetails'  is null.");
          }
            // Add the new WorkerDetail to the PaymentDetails collection and save changes

            _context.PaymentDetails.Add(workerDetail);
            await _context.SaveChangesAsync();
            // Return a 201 Created response with the created WorkerDetail
            return CreatedAtAction("GetWorkerDetail", new { id = workerDetail.WorkerDetailId }, workerDetail);
        }

        // DELETE: api/WorkerDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWorkerDetail(int id)
        {
            // Check if the PaymentDetails collection is null

            if (_context.PaymentDetails == null)
            {
                return NotFound();
            }
            // Find the WorkerDetail with the specified id

            var workerDetail = await _context.PaymentDetails.FindAsync(id);
            // If the WorkerDetail is not found, return NotFound
            if (workerDetail == null)
            {
                return NotFound();
            }
            // Remove the WorkerDetail from the PaymentDetails collection and save changes
            _context.PaymentDetails.Remove(workerDetail);
            await _context.SaveChangesAsync();
            // Return a successful response with no content
            return NoContent();
        }

        // Check if a WorkerDetail with the specified id exists
        private bool WorkerDetailExists(int id)
        {
            return (_context.PaymentDetails?.Any(e => e.WorkerDetailId == id)).GetValueOrDefault();
        }
    }
}
