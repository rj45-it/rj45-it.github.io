const POWIEDZ_ANSWERS = [
  {
    keywords: ['beton'],
    title: 'Beton',
    answer: 'Beton powstaje z cementu, kruszywa i wody. Jego jakość zależy od jakości oraz proporcji tych składników.'
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
    keywords: ['hotkostka', 'goraca kostka', 'gorąca kostka'],
    title: 'Hotkostka',
    answer: 'Hotkostka to gorąca kostka, którą znajdziesz w specjalnej części tej strony.'
  },
  {
    keywords: ['ile kosztuje chleb', 'chleb'],
    title: 'Ile kosztuje chleb?',
    answer: '2zł'
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
