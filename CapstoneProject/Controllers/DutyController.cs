using CapstoneProject.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace CapstoneProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DutyController
    {
        DutyDAL db = new DutyDAL();

        [HttpGet]
        public List<Duty> GetDutys()
        {
            return db.GetDutys();
        }

        [HttpGet("get/{id}")]
        public Duty GetDuty(int id) 
        {
            return db.GetDuty(id);
        }

        [HttpPost("makeNew")]
        public void PostDuty(Duty d)
        {
            db.InsertDuty(d);
        }


        [HttpDelete("delete/{id}")]
        public void DeleteDuty(int id)
        {
            db.DeleteDuty(id);
        }

        [HttpPut("update/{id}")]
        public void UpdateDuty(int id, Duty d)
        {
            Duty original = db.GetDuty(id);
            if (d.Name == null || d.Name == "")
            {
                d.Name = original.Name;
            }
            if (d.Description == null || d.Description == "")
            {
                d.Description= original.Description;
            }
            if (d.Due == null || d.Due == "")
            {
                d.Due = original.Due;
            }

            if (d.Completed==null || d.Completed=="")
            {
                d.Completed = original.Completed;
            }


            db.UpdateDuty(id, d);
        }

    }
}
