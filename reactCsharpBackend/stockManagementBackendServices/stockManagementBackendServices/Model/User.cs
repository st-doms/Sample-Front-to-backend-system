using System;
using System.ComponentModel.DataAnnotations;

namespace stockManagementBackendServices.Model
{
    public class User
    { 
        public string userName { get; set; }
        public string password { get; set; }
        public string email { get; set; }

        public User()
        {
        }

        public User(string userName, 
                    string password)
        {
            this.userName = userName;
            this.password = password;
            //always default
            this.email = null;
        }

        public User(string userName,
                    string password,
                    string email)
        {
            this.userName = userName;
            this.password = password;
            this.email = email;
        }

        public override bool Equals(object obj)
        {
            return Equals(obj as User);
        }

        public bool Equals(User user)
        {
            return this.userName.Equals(user.userName) &&
                this.password.Equals(user.password);
        }

        ~User()
        {

        }
    }
}
