using System;
namespace stockManagementBackendServices.Model
{
    public class Responce
    {
        public Responce() { }

        public Responce(bool isSuccessfull)
        {
            this.isSuccessfull = isSuccessfull;
        }

        //you do not have to but get in the habit of creatring destructors even if there default
        ~Responce() { }
        public bool isSuccessfull { get; set; }
    }
}
