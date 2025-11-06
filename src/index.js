console.log("weLCOME")
alert("chyba tak")

const pages = [
  '3eafeff2-a434-4c5f-aaf1-ca7d37769194.html',
  '908c4441-196c-4368-8830-b9f8584ba410.html',
  '8915c676-01c8-47ed-8881-fcf6a259eaa1.html',
  '2ddbfba0-3449-46e9-aa76-87571e6afba3.html',
];

function goToRandomPage() {
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = 'random/' + randomPage;
}