// if we want to modify databse then only we modify this.
// Generally we don't do.

// This class basically supposed to abstract everything.
// The creation of person , we dont care on the service controller level , what the
// table name for firstname , lastname and email is.We just dont care about it.

//  Just create this object in database. I dont care how you do it.

const db = require("../db/db");

class PersonDAO {
  async createPerson(firstName, lastName, email) {
    const [id] = await db("person")
      .insert({
        email,
        first_name: firstName,
        last_name: lastName,
      })
      .returning("id"); //get back to PK of person

    return id;
  }
}

module.exports = new PersonDAO();
//We dont have try catch , if something occurs , it flows to service layer
