console.log("weLCOME")
alert("chyba tak")

const pages = [
  '2ddbfba0-3449-46e9-aa76-87571e6afba3.html',
  '3c1a4d2e-5b9f-4e63-9c6e-2b3f7a8b0d5e.html',
  '3eafeff2-a434-4c5f-aaf1-ca7d37769194.html',
  '4983f6b5-4f2d-4dae-962d-c7f4e38f6e8d.html',
  '52f7d08a-a4e0-4b1e-8c74-b4399fae4d2b.html',
  '7f6b32e3-1fa5-4fb7-b4c9-8c5467765292.html',
  '8915c676-01c8-47ed-8881-fcf6a259eaa1.html',
  '908c4441-196c-4368-8830-b9f8584ba410.html',
  'a9e8b7c6-1234-4fae-9d9e-0b1c2d3e4f5a.html',
  'c8b1a6f4-5d7a-4b61-9c23-1a2f4b0d8e7c.html',
  'd97a41b2-6c3f-47b8-9af2-4e3d5c1f0a9b.html',
  'e1b8d65f-9cde-4c54-96c8-7f7b9d2a1c3e.html',
  'f4b2c3d8-9a0b-4c1e-8f7d-6a5b4c3d2e1f.html',
  '7b084c56-15cd-447d-88f6-2e1b0a3c9f2e.html',
  'e26d4f0b-3a14-4c59-96e3-0d8f2b5c1a7e.html',
  'fa329d07-5c2a-408b-9f69-3e5d7a81c2b0.html',
  '1f8d2a3b-4c5e-47d9-9b1c-3e4f5a6b7c8d.html',
  'a7c9d8e2-b3f4-45a1-9f6c-2b1d3e4f5a6b.html',
  'b2f7a3d9-c8e4-41b1-8d2f-9a0c7e6d5b4a.html',
  '2456ab78-90cd-4ef1-2345-6789abcdef01.html',
  'fc1ed2a4-5b6c-47d8-9e0f-1a2b3c4d5e6f.html',
  '92d7c4e5-3a2b-47f8-9d6c-1e0f2a3b4c5d.html',
  '12f3a4b5-c6d7-48e9-8f1a-2b3c4d5e6f7a.html',
  '98a7b6c5-d4e3-21f0-9a8b-7c6d5e4f3a2b.html',
  '0f1e2d3c-4b5a-6978-9f0e-1d2c3b4a5f6e.html',
  'a1b2c3d4-e5f6-47a8-9b0c-1d2e3f4a5b6c.html',
  '12345678-1234-5678-9abc-def012345678.html',
  'abcdef12-3456-7890-abcd-ef1234567890.html',
  'fedcba98-7654-3210-fedc-ba9876543210.html',
  '11111111-2222-3333-4444-555555555555.html',
  '66666666-7777-8888-9999-aaaaaaaaaaaa.html',
  'bbbbbbbb-cccc-dddd-eeee-ffffffffffff.html',
  'dddddddd-eeee-ffff-gggg-hhhhhhhhhhhh.html',
  'eeeeeeee-ffff-gggg-hhhh-iiiiiiiiiiii.html',
  'jjjjjjjj-kkkk-llll-mmmm-nnnnnnnnnnnn.html',
  'oooooooo-pppp-qqqq-rrrr-ssssssssssss.html',
  'tttttttt-uuuu-vvvv-wwww-xxxxxxxxxxxx.html',
  'uuuuuuuu-vvvv-wwww-xxxx-yyyyyyyyyyyy.html',
  'vvvvvvvv-wwww-xxxx-yyyy-zzzzzzzzzzzz.html',
  'https://youtu.be/xvFZjo5PgG0?feature=shared',
  'https://www.youtube.com/watch?v=D_h2G6QMMjA',
  'https://gógl.pl',
  '87654321-abcd-ef12-3456-789012345678.html',
  '12345678-9abc-def0-1234-567890abcdef.html',
];

function goToRandomPage() {
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  if (randomPage.startsWith('http://') || randomPage.startsWith('https://')) {
    window.location.href = randomPage;
  } else {
    window.location.href = 'random/' + randomPage;
  }
}