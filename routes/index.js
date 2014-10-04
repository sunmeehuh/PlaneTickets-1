
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'PlaneTickets - Fast, cheap airfare deals and search' });
};