var Items = require('../models/itemModel');
var bodyParser = require('body-parser');
var cors = require('cors');


module.exports = function(app) {

   app.use(cors({origin: 'http://localhost:3000'}));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/test', function(req, res) {

      res.send({"test": "test"});

    });

    app.get('/api/items', function(req, res) {

      //  Items.find({}, function(err, item) {
      //      if (err) throw err;
       //
      //      res.send({"items": item});
      //  });

      res.send({
         "item": {
            "_id": "1",
            "name": "MacBook",
            "isCool": true,
         }
      });

    });

   app.get('/api/items/:id', function(req, res) {

      Items.findById({ _id: req.params.id }, function(err, item) {
         if (err) throw err;

         res.send(item);
      });

   });

    app.post('/api/items', function(req, res) {
        if (req.body.id) {
            Items.findByIdAndUpdate(req.body.id, { item: req.body.item.item, isCool: req.body.item.isCool }, function(err, item) {
                if (err) throw err;

                res.status(204).send("Success");
            });
        }

        else {

           var newItem = Items({
               item: req.body.item.item,
               isCool: req.body.item.isCool,
           });
           newItem.save(function(err,item) {
               if (err) throw err;

               return res.status(200).json({ item: item });
           });

        }

    });

    app.put('/api/items/:id', function(req, res) {
      Items.findByIdAndUpdate(req.params.id, { item: req.body.item.item, isCool: req.body.item.isCool }, function(err, item) {
          if (err) throw err;
          res.status(204).send("Success");
      });
    });

    app.delete('/api/items/:id', function(req, res) {
         Items.findByIdAndRemove({ _id: req.params.id }, function(err) {
            if (err) throw err;
            res.status(204).send("Success");
         });

    });

    app.delete('/api/item', function(req, res) {

        Items.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.status(204).send("Success");
        })

    });

}
