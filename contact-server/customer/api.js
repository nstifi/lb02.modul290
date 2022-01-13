const customer = require("./controller.js");
module.exports = app => {
  const customer = require("./controller.js");

  // Create a new Customer (SQL-Insert)
  app.post("/customer", customer.create);

  // Retrieve all Customers (SQL-Select)
  app.get("/customers", customer.findAll);

  //Aufgabe: REST-API, um EINEN Kunden anhand der ID auszugeben
  //--Begin
  // Retrieve a single Customer with login id
  //app.get("/customer/:id", customer.findOne); // ?? weiss nicht ob es stimmt ?? //
  //--End

  // Update a Customer with customerId (SQL-Update)
  app.put("/customer/:id", customer.update);


  //Aufgabe: REST-API, um EINEN Kunden anhand der ID zu löschen
  //--Begin
  // Delete a Customer with customerId
  //app.delete("/customer/:id", customer.remove); // ?? weiss nicht ob es stimmt ?? //
  //--End


  //Aufgabe: REST-API, um alle Kunden zu löschen
  //--Begin
  // delete all customers
  //app.delete("/customers", customer.removeAll);  // ?? weiss nicht ob es stimmt ?? //
  //--End

};
