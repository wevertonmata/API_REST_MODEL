import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log();
  console.log(`Backend está rodando na porta ${port}.`);
  console.log(`CRTL + Clique em: http://localhost:${port}`);
});
