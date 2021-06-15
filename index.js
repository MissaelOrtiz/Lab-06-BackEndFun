applicationCache.use(cors())
const app = require('./server.js');
const port = process.env.PORT || 4582; 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});