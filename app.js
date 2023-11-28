require("dotenv").config();
var express = require('express');
var app = express();
var path = require('path');
const morgan = require('morgan');

const redis = require('redis');
var sequelize = require('./models').sequelize;
const logger = require('./config/logger');
const morganMiddleware = require('./middleware/customMorgan');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

sequelize.sync();

const indexRouter = require('./routes/index');
const naverRouter = require('./routes/auth/naver');
//const kakaoRouter = require('./routes/auth/kakao');


app.use(morganMiddleware)
app.use('/',indexRouter);
app.use('/auth/naver',naverRouter);
//app.use('/auth/kakao',kakaoRouter);

// 로그 기록
if (process.env.NODE_ENV === 'production') { 
  app.use(morgan('combined')); // 배포환경이면
} else {
  app.use(morgan('dev')); // 개발환경이면
}

//* Redis 연결
// redis[s]://[[username][:password]@][host][:port][/db-number]
// const redisClient = redis.createClient({
//   url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}/0`,
//   legacyMode: true, // 반드시 설정 !!
// });
// redisClient.on('connect', () => {
//   console.info('Redis connected!');
// });
// redisClient.on('error', (err) => {
//   console.error('Redis Client Error', err);
// });
// redisClient.connect().then(); // redis v4 연결 (비동기)
// const redisCli = redisClient.v4; // 기본 redisClient 객체는 콜백기반인데 v4버젼은 프로미스 기반이라 사용


 app.listen(4000, function () {
   console.log('http://127.0.0.1:4000/naverlogin app listening on port 4000!');
 });

