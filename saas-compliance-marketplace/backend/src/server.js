const { app } = require('./app');

const port = Number(process.env.PORT || 8090);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`SaaS backend listening on http://localhost:${port}`);
});
