const express = require('express');
const app = express();
const packageRoute = express.Router();
let packageModel = require("../model/PackageModel");

packageRoute.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  next();
});

// Get all package
packageRoute.route('/').get((req, res) => {
  packageModel.find().sort({id: 1}).exec((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// Get one package
packageRoute.route('/Product/:id').get((req, res) => {
  packageModel.find({id:req.params.id}).sort({id: 1}).exec((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});

packageRoute.route('/typeProduct/:typeProduct').get((req, res) => {
  packageModel.find({type: req.params.typeProduct}).sort({id: 1}).exec((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});


packageRoute.route('/get8NewProduct').get((req, res) => {
  packageModel.find().limit(8).sort({
    id: -1
  }).exec((error, data) => {
    if (error) {
      return next(error)
    } else {
      // console.log(data);
      res.json(data)
    }
  })
});

packageRoute.route('/get8TopProduct').get((req, res) => {
  packageModel.find().limit(8).sort({
    id: -1
  }).exec((error, data) => {
    if (error) {
      return next(error)
    } else {
      // console.log(data);
      res.json(data)
    }
  })
});

// create package
packageRoute.route('/create').post((req, res, next) => {
  // console.log(req.body);
  packageModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Delete package
packageRoute.route('/delete/:id').delete((req, res, next) => {
  // console.log("package delete");
  packageModel.deleteOne({
    id: req.params.id
  }).exec((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.send(data)
      // console.log("success delete");
    }
  })
})

packageRoute.route('/update/:id').put((req, res, next) => {
  $old = packageModel.find({
    id: req.params.id
  });
  packageModel.updateOne($old, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      // console.log(error)
    } else {
      res.json(data)
      // console.log('Data updated successfully')
    }
  })
});


module.exports = packageRoute;
