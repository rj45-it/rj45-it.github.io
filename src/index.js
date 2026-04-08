console.log("weLCOME")
alert("chyba tak")

const pages = [
  '3eafeff2-a434-4c5f-aaf1-ca7d37769194.html',
  '908c4441-196c-4368-8830-b9f8584ba410.html',
  '8915c676-01c8-47ed-8881-fcf6a259eaa1.html',
  '2ddbfba0-3449-46e9-aa76-87571e6afba3.html',
  '7f6b32e3-1fa5-4fb7-b4c9-8c5467765292.html',
  '4983f6b5-4f2d-4dae-962d-c7f4e38f6e8d.html',
  'e1b8d65f-9cde-4c54-96c8-7f7b9d2a1c3e.html',
  '52f7d08a-a4e0-4b1e-8c74-b4399fae4d2b.html',
  '3c1a4d2e-5b9f-4e63-9c6e-2b3f7a8b0d5e.html',
  'a9e8b7c6-1234-4fae-9d9e-0b1c2d3e4f5a.html',
  'f4b2c3d8-9a0b-4c1e-8f7d-6a5b4c3d2e1f.html',
  'c8b1a6f4-5d7a-4b61-9c23-1a2f4b0d8e7c.html',
  'd97a41b2-6c3f-47b8-9af2-4e3d5c1f0a9b.html',
  'https://youtu.be/xvFZjo5PgG0?feature=shared',
  'https://www.youtube.com/watch?v=D_h2G6QMMjA',
  'https://gógl.pl',
];

function goToRandomPage() {
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  if (randomPage.startsWith('http://') || randomPage.startsWith('https://')) {
    window.location.href = randomPage;
  } else {
    window.location.href = 'random/' + randomPage;
  }
}