
/*
 * POST feedback.
 */

exports.index = function(req, res, next) {
  
  var AWS = require('aws-sdk');
  AWS.config.loadFromPath('./config/credentials.json');

  var text = req.body.text;
  var ses = new AWS.SES({sslEnabled: true});
  var params = {
    Source: 'xxx@xxx',
    Destination: {
      ToAddresses: ['xxx@xxx'],
    },
    Message: {
      Subject: {
        Data: '【Feedback】'
      },
      Body: {
        Text: {
          Data: text
        }
      }
    }
  };
  
  ses.client.sendEmail(params, function (err, data) {
    if (err) {
      next(err);
    } else {
      res.send();
    }
  });

}
