var request = require("request")

module.exports.getData = function(req, res) {

    var url = "http://hey-guy.softledger.com/?key=8bfffeca-2182-11e7-93ae-92361f002671"

    request({
        url: url,
        json: true
    }, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            res.status(200).json(body);
        }
    })

};


module.exports.getRates = function(req, res) {
  var url = "http://api.fixer.io/latest?base=USD"

  request({
      url: url,
      json: true
  }, function(error, response, body) {
      if (!error && response.statusCode === 200) {
          res.status(200).json(body);
      }
  })
};
