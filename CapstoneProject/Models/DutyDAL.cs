using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CapstoneProject.Models
{
    public class DutyDAL
    {
        public List<Duty> GetDutys()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from dutys";
                connect.Open();
                List<Duty> output = connect.Query<Duty>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        public Duty GetDuty(int id)
        {
            List<Duty> output = GetDutys();
            Duty match;
            try
            {
                match = output.Where(d => d.Id == id).First();
            }
            catch (InvalidOperationException)
            {
                match = new Duty();
                match.Description = $"Duty at index {id} does not exist, please try another id";
            }
            return match;
        }

        public void InsertDuty(Duty d)
        {
            string sql = $"insert into dutys values('{d.Name}', '{d.Description}', '{d.Due}', '{d.Completed})', 0";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Duty>(sql);
                connect.Close();
            }

        }

        public void DeleteDuty(int id)
        {
            string sql = $"delete from dutys where id ={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Duty>(sql);
                connect.Close();
            }
        }

        public void UpdateDuty(int id, Duty newValues)
        {
            string sql = $"update dutys set name='{newValues.Name}', description='{newValues.Description}', due='{newValues.Due}', completed='{newValues.Completed}' where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Duty>(sql);
                connect.Close();
            }

        }



    }
}
