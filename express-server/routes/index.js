import * as express from 'express'
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('', { title: 'Express' });
  res.render('../public/index.html')
});
export { router }
