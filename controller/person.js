// SERVICE LAYER: contains logic
// THIS LAYER: This layer does need to know data layer. It just communicates , getting requests,
// delegates to service and if there is any error , it communicates back.
const personService = require("../service/person");
class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.error(err);
    }
  }
}
module.exports = new PersonController();
