var Items = require('../models/itemModel');

module.exports = function(app) {

   app.get('/api/setupItems', function(req, res) {

       // seed database
       var itemData = [
           {
               name: 'iPhone',
               isCool: true,
           },
           {
               name: 'MacBook',
               isCool: true,
           },
           {
               name: 'Avacodo',
               isCool: false,
           }
       ];
       Items.create(itemData, function(err, results) {
           res.send(results);
       });
   });

}
