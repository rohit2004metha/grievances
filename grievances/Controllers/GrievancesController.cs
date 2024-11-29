using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using grievances.Data;
using grievances.Models;
using Microsoft.AspNetCore.Mvc;

//using GrievancesContext context = new GrievancesContext();

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Application
{
    [Route("api/[controller]")]
    public class GrievancesController : Controller
    {

        private readonly GrievancesContext _grievanceData;
        public GrievancesController(GrievancesContext grievanceData)
        {
            this._grievanceData = grievanceData;
        }

        // GET: api/Grievances
        [HttpGet]
        public ActionResult<IEnumerable<Complaint>> Get()
        {
            var complaints = _grievanceData.Complaints;
            if (!complaints.Any())
            {
                return NotFound();
            }
            return Ok(complaints);
        }

        // GET api/Grievances/32103924g
        [HttpGet("{id}")]
        public ActionResult<Complaint> Get(string id)
        {
            var complaint = (from c in _grievanceData.Complaints where c.Id == id select c).FirstOrDefault();
            if (complaint == null)
            {
                Console.WriteLine("NOT FOUND");
                return NotFound();
            }
            return Ok(complaint);
        }

        // POST api/Grievances
        [HttpPost]
        //public async Task<ActionResult<Complaint>> Post([FromBody] Complaint complaint)
        public async Task<ActionResult<Complaint>> Post([FromBody]AddComplaintRequest req)
        {
            Complaint complaint = new Complaint();
            complaint.Title = req.title;
            complaint.Complainant = req.from;
            complaint.Description = req.description;
            complaint.Stamp = DateTime.Now;
            complaint.Resolved = false;
            complaint.Resolution = null;
            complaint.Id = Guid.NewGuid().ToString();
            await _grievanceData.Complaints.AddAsync(complaint);
            await _grievanceData.SaveChangesAsync();
            return complaint;
        }

        // POST api/Grievances/resolve
        [HttpPost("resolve")]
        public async Task<ActionResult> Resolve([FromBody]ResolveRequest res)
        {
            Console.WriteLine($"Resolve for {res.id}, reso: {res.resolution}");
            var complaint = _grievanceData.Complaints.FirstOrDefault(_ => _.Id == res.id);
            if (complaint != null)
            {
                complaint.Resolution = res.resolution;
                complaint.Resolved = true;
                await _grievanceData.SaveChangesAsync();
                return Ok("resolved");
            } else
            {
                return NotFound();
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var complaint = _grievanceData.Complaints.FirstOrDefault(_ => _.Id == id);
            if (complaint != null)
            {
                _grievanceData.Complaints.Remove(complaint);
                await _grievanceData.SaveChangesAsync();
                return Ok();
            } else
            {
                return NotFound();
            }

        }
    }
}

