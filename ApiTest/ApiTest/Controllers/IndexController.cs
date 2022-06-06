using ApiTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace ApiTest.Controllers
{
    public class IndexController : ApiController
    {
        SqlConnection conn;
        SqlCommand cmd = new SqlCommand();
        SqlDataAdapter adapter = new SqlDataAdapter();
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        //GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }
        [HttpGet]
        public List<StudentModel> GetData()
        {
            SqlConn();
            List<StudentModel> _listUser = new List<StudentModel>();
           
            DataTable dt = new DataTable();
            cmd.Connection = conn;
            cmd.CommandText = "select * from UserData";
            cmd.CommandType = CommandType.Text;
            conn.Open();
            adapter.SelectCommand = cmd;
            adapter.Fill(dt);

            if (dt.Rows.Count>0)
            {
                foreach (DataRow dr in dt.Rows)
                {
                    StudentModel m = new StudentModel();
                    m.name = dr["UserName"].ToString();
                    m.mobile= dr["Mobile"].ToString();
                    m.email = dr["Email"].ToString();
                    m.age = Convert.ToInt32(dr["Age"]);
                    m.address = dr["Address"].ToString();
                    _listUser.Add(m);
                }
            
            }
            conn.Close();
            return _listUser;


        }



        [HttpPost]
        public Boolean Post([FromBody] StudentModel stud)
        {
            SqlConn();
            cmd.Connection = conn;
            cmd.CommandText = "insert into UserData(Username,mobile,email,age,address) values ('" + stud.name + "','" + stud.mobile + "','" + stud.email + "','" + stud.age + "','" + stud.address + "')";
            cmd.CommandType = CommandType.Text;
            conn.Open();
            int i = cmd.ExecuteNonQuery();
            if (i > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }



        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpGet]
        public string Delete(int id)
        {
            SqlConn();
            cmd.Connection = conn;
            cmd.CommandText = "delete from UserData where UserId =" + id;
            cmd.CommandType = CommandType.Text;
            conn.Open();
            return "Record Deleted";
        }
        [HttpDelete]


        private void SqlConn()
        {
            string conString = ConfigurationManager.ConnectionStrings["DB2"].ToString();
            conn = new SqlConnection(conString);
        }
    }
}