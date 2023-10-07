import * as createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import cookieParser from 'cookie-parser'
import logger from "morgan"

import {router as indexRouter} from './routes/index.js'
import {router as usersRouter} from './routes/users.js'
import {router as projectImagesRouter} from './routes/project-images.js'
import {router as contactRouter} from './routes/contact.js'
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const projectImagesDir = path.join(__dirname, 'public/images/projects/')
app.use('/project/gallery', express.static(projectImagesDir))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/project/images', projectImagesRouter)
app.use('/contact', contactRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export {app}
