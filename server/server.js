const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');
const oredersRouter = require('./routes/ordersRouter');
const servicesRouter = require('./routes/servicesRouter');
const orderedServicesRouter = require('./routes/orderedServicesRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokensRouter);
app.use('/api/orders', oredersRouter);
app.use('/api/services', servicesRouter);
app.use('/api/orderedservices', orderedServicesRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
