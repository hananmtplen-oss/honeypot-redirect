app.get('/redirect', (req, res) => {
  const url = req.query.url;
  res.redirect(url);
});

app.post('/oauth/callback', (req, res) => {
  const redirect = req.body.redirect_uri;
  res.redirect(redirect);
});
