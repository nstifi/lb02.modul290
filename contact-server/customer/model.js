const sql = require("../db.js");

module.exports = class Customer {
    // constructor
    constructor() {
    }

    /***
     * Create a new customer
     * @param newCustomer: customer data (object literal)
     * @param cbResult: result of sql statement
     */
    create(newCustomer, cbResult) {
        sql.query('INSERT INTO customer SET ?', newCustomer, (err, res) => {
            if (err) {
                console.log("error: ", err);
                cbResult(err, null);
                return;
            }

            console.log("created contact: ", {id: res.insertId, ...newCustomer});
            cbResult(null,
                {msg: "New Contact from has been inserted!", id: res.insertId, ...newCustomer});
        });
    }


    /**
     * Select customer by ID
     * @param id
     * @param cbResult: result of sql statement
     */
    //Aufgabe: Lese einen einzelnen Kunden anhand der ID aus
    //--Begin
    findById(id, cbResult) {
        let queryString = 'SELECT * FROM customer WHERE id = ?';
        sql.query(queryString, id, (err, result) => {
            if (err) {
                console.log("error: ", err);
                //err zurückgeben, data = null
                cbResult(err, null);
                return;
            }

            //result of the select (greater than 0) has found a record (Tupel)
            if (result.length) {
                console.log("found customer: ", result[0]);
                cbResult(null, result[0]);
                return;
            }

            // not found Customer with the id
            console.log("selected customer: ", {id: id, ...customer});
            cbResult(null, {id: id, ...customer});
        });
    };
    //--End


    /**
     * Get all customers
     * @param cbResult: result of sql statement
     */
    getAll(cbResult){
        sql.query('SELECT * FROM customer', (err,result) => {
            if (err){
                console.log("error: ", err);
                //err zurückgeben, data = null
                cbResult(err, null);
                return;
            }
            console.log("customer: ", result);
            //err = null, data zurückgeben
            cbResult(null, result);
        })
    }


    /**
     * Update customer by ID
     * @param id: customer ID
     * @param customer: customer object literal
     * @param cbResult: result of sql statement
     */
    updateById(id, customer, cbResult) {
        //Aufgabe: Update der Attribute lastName, subject, description, phone
        //--Begin
        let queryString = 'UPDATE customer SET email = ?, autor = ?';
        queryString += ' WHERE id = ?';
        //--End
        sql.query(queryString,
            [customer.email, customer.autor, parseInt(id)],
            (err, result) => {
                if (err){
                    console.log("error: ", err);
                    //err zurückgeben, data = null
                    cbResult(err, null);
                    return;
                }

                if (result.affectedRows === 0) {
                    // not found Customer with the id
                    cbResult({kind: "not_found"}, null);
                    return;
                }

                console.log("updated customer: ", {id: id, ...customer});
                cbResult(null, {id: id, ...customer});
            }
        );
    };

    /**
     * Remove single customer by ID
     * @param id
     * @param cbResult: result of sql statement
     */
    //Aufgabe: Einzelnen Kunden anhand der ID löschen
    //--Begin
    removeById(id, cbResult) {
        sql.query('DELETE FROM customer WHERE id = ?', id, (err, result) => {
            if (err) {
                console.log("error: ", err);
                //err zurückgeben, data = null
                cbResult(err, null);
                return;
            }

            if (result.affectedRows === 0) {
                // not found Customer with the id
                cbResult({kind: "not_found"}, null);
                return;
            }

            console.log("deleted customer with id: ", id);
            cbResult(null, {id: id, ...customer});
        });
    }
    //--End

    /**
     * Remove all customers
     * @param cbResult: result of sql statement
     */
    //Aufgabe: Alle Kunden löschen
    //--Begin
    removeAll(cbResult) {
        sql.query('DELETE FROM customer', (err, result) => {
            if (err) {
                console.log("error: ", err);
                //err zurückgeben, data = null
                cbResult(err, null);
                return;
            }

            console.log(`deleted ${result.affectedRows} customer`);
            cbResult(null, result);
        });
    }
}

