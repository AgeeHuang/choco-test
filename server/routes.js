const Drama = require('./model');

module.exports = (app) => {
  // get drama list by drama name.
  app.get('/api/list', (req, res, next) => {
    const filter = req.query.name ?
      {
        name: {
          $regex : `.*${req.query.name}.*`,
          $options: '$i',
        }
      } :
      null;
    // return drama when the name include req string.
    Drama.find(filter)
    .exec()
    .then((dramaList) => res.json({ result: dramaList, keyword: req.query.name }))
    .catch((err) => next(err));
  });
};
