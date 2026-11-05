const POWIEDZ_ANSWERS = [
  {
    keywords: ['beton'],
    title: 'Beton',
    answers: [
      { type: 'text', text: 'Beton powstaje z cementu, kruszywa i wody. Jego jakość zależy od jakości oraz proporcji tych składników.' },
      { type: 'text', text: 'Do przygotowania betonu potrzebne są cement, kruszywo i woda. Ważne są jakość składników i ich proporcje.' },
      { type: 'text', text: 'Beton tworzą cement, kruszywo oraz woda, a jego jakość zależy od użytych składników i ich ilości.' }
    ]
  },
  {
    keywords: ['cement'],
    title: 'Cement',
    answer: 'Cement jest spoiwem, które po połączeniu z wodą wiąże kruszywo i tworzy beton.'
  },
  {
    keywords: ['kruszywo'],
    title: 'Kruszywo',
    answer: 'Kruszywo to ziarnisty składnik betonu, na przykład piasek, żwir albo tłuczeń.'
  },
  {
    keywords: ['woda'],
    title: 'Woda',
    answer: 'Woda jest potrzebna do związania cementu. Jej ilość ma wpływ na wytrzymałość gotowego betonu.'
  },
  {
    keywords: ['rj45', 'rj 45'],
    title: 'RJ45',
    answer: 'RJ45 to popularne złącze używane przy przewodach sieci Ethernet.'
  },
  {
    keywords: ['bigos'],
    title: 'Bigos',
    answer: 'Bigos mieści się w pralce tylko wtedy, gdy pralka jest odpowiednio duża. Nie próbuj tego sprawdzać.'
  },
  {
    keywords: ['Czy Lenin był grzybem','Lenin grzyb','Kim był Lenin'],
    title: 'Lenin Grzyb',
    answer: 'Tak Lenin był grzybem potwierdza to masa naukowców.'
  },
  {
    keywords: ['Bismarck','Bismarck kanclerz','Otto Von Bismarck','Kim był Bismarck' ],
    title: 'Bismark',
    answer: 'Ale Bismarck to był statek'
  },
  {
    keywords: ['Ile Kosztuje Chomik','ile kosztuje chomik'],
    title: 'Chomik',
    answer: 'Chomik kosztuje w zależności od ilości użytkowników na chomikuj.pl od 30 do 231zł'
  },
  {
    keywords: ['hotkostka', 'goraca kostka', 'gorąca kostka'],
    title: 'Hotkostka',
    answer: 'Hotkostka to gorąca kostka, którą znajdziesz w specjalnej części tej strony.'
  },
  {
    keywords: ['Dys', 'dys', 'dysocjacja'],
    title: 'Los Dysos',
    answer: 'Król Dysa układa tam kostę brukową wydrukowaną na drukarce monojonowej'
  },
   {
    keywords: ['co Było starsze', 'co było starsze', 'Co było starsze'],
    title: 'Co było starsze',
    answer: 'Co było pierwsze: jajo czy szyny kolejowe? Pytanie stare jak Maryla Rodowicz. Czy uważacie, że mają? Przemyślcie to jeszcze raz. Nie potrafimy dać wam jednoznacznej odpowiedzi. Możemy jednak zabrać was do Austrii, gdzie z jajek wykluwają się szyny kolejowe...'
  },
  {
    keywords: ['Jakie jest piwo','jakie jest piwo'],
    title: 'PIWO',
    answers: [
      {
        type: 'text',
        text: 'Najlepsze Piwo to Mocne FULL',
        image: {
          src: 'https://nonsa.pl/images/thumb/5/53/Mocny-full.jpg/150px-Mocny-full.jpg',
          alt: 'Mocne FULL'
        }
      }
    ]
  },
  {
    keywords: ['Jak umyć zęby', 'jak1'],
    title: 'Jak umyć zęby',
    answer: 'Krok 1   Udaj się do składowiska materiałów rozszczepiapnych  Krok 2   otwórz beczke z śmiewznym piktogramem Krok 3  zanurz w środku szczoteczke  Krok 4 Zacznij myć zemby '
  },
    {
    keywords: ['Ile kosztuje chleb','ILE KOSZTUJE CHLEB','Ile Kosztuje chleb','Ile Kosztuje Chleb','Ile kosztuje Chleb','ile kosztuje chleb'],
    title: 'Chleb',
    answers: [
      { type: 'text', text: 'Chleb kosztuje 2zł .' },
      { type: 'text', text: 'Staram się od czasu do czasu robić zakupy właśnie po to, żeby w sklepie spożywczym zobaczyć, jakie są ceny. Porównuję je do cen w sklepach z wcześniejszych miesięcy. Ale panie redaktorze, pani redaktor, chleb rośnie w oparciu o to, co dzieje się na rynkach rolnych. Przecież dzisiaj rolnicy zbierają plony, dzisiaj zbierają pszenicę i cieszą się z tego, bo rozmawiam z rolnikami, że ceny pszenicy, rzepaku, kukurydzy, żywca są wyższe niż były rok, dwa lata temu, trzy lata temu. Bo z punktu widzenia rolnika, to jest wyższy przychód, wyższy dochód.Z punktu widzenia konsumenta, to oznacza, że te produkty, które są przetworzone z rzepaku czy z pszenicy, będą droższe. Ale pamiętajmy o tym, co na tę cenę chleba wpływa, bo na nią wpływa bardzo wiele elementów. Po pierwsze: te, o których powiedziałem na rynkach światowych. Po drugie: no rzepak i pszenica, czyli podstawowe surowce. Po trzecie: no koszty pracy, które na wsi przecież też rosną. Po czwarte: koszty energii. No i wreszcie po piąte: to, z czym polska wieś boryka się cały czas, czyli te straszne plagi, które na polską wieś spadły – ASF, ptasia grypa, susza czasami, potopienia. To wszystko wpływa na ceny żywności. Naszym podstawowym zadaniem, celem, jest to, żeby te ceny z jednej strony były jak najbardziej stabilne, ale z drugiej strony, żeby zrekompensować to emerytom – stąd czternasta emerytura, emerytura bez podatku – czy pracownikom, stąd podniesienie płacy minimalnej do trzech tysięcy złotych od 1 stycznia przyszłego roku.' },
      { type: 'text', text: 'Na to pytanie nasi naukowcy nie mają jeszcze odpowiedzi' }
    ]
  }
];

function normalisePowiedzText(value) {
  return value
    .toLocaleLowerCase('pl-PL')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function findPowiedzAnswer(query) {
  const normalisedQuery = normalisePowiedzText(query);
  return POWIEDZ_ANSWERS.find((entry) =>
    entry.keywords.some((keyword) => normalisedQuery.includes(normalisePowiedzText(keyword)))
  );
}

function getRandomPowiedzResponse(entry) {
  const responses = Array.isArray(entry.answers) && entry.answers.length
    ? entry.answers.slice(0, 3)
    : [entry.answer];
  const response = responses[Math.floor(Math.random() * responses.length)];

  return typeof response === 'string'
    ? { type: 'text', text: response }
    : response;
}
