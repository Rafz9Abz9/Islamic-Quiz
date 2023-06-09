const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll ('.choice-texts'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const mainProgress = document.querySelector('#mainProgress');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
     question: 'Which surah (chapter) is considered as one third (1/3) of the Quran?',
     choice1: 'Yaseen',
     choice2: 'Ikhlas',
     choice3: 'Fatihah',
     choice4: 'Falaq',
     answer: 2,
    },
    {
      question: 'How many surahs are in the Quran?',
      choice1: '86',
      choice2: '112',
      choice3: '150',
      choice4: '114',
      answer: 4,
     },
     {
      question: 'How was the Quran revealed to Prophet Muhammad (PBUH)?',
      choice1: 'Quran was revealed through Jinn',
      choice2: 'Quran was revealed through visions and dreams',
      choice3: 'Quran was revealed through Angel Jibril to Prophet Muhammad (PBUH)',
      choice4: 'Quran was revealed directly to Prophet Muhammad (PBUH)',
      answer: 3,
     },
     {
      question: 'What is the first verse which was revealed to Prophet Muhammad (PBUH)?',
      choice1: 'Read in the name of your Lord who created - created man (Quran 96:1)',
      choice2: 'All praise is due to Allah, Lord of the worlds (Quran 1:1)',
      choice3: 'This is the Scripture whereof there is no doubt, a guidance unto those who ward off (evil) (Quran 2:2)',
      choice4: 'Say: He is Allah, the One! (Quran 112:1)',
      answer: 1,
     },
     {
      question: 'Which prophet was born miraculously without the intervention of a man?',
      choice1: 'Isa',
      choice2: 'Dawud',
      choice3: 'Yunus',
      choice4: 'Yaqub',
      answer: 1,
     },
     {
      question: 'What is the single most important message from Allah that all the messengers brought?',
      choice1: 'The most important message was to eat, drink and to remain happy',
      choice2: 'The most important message was to worship all idols and deities',
      choice3: 'The most important message was to worship Allah alone and none else',
      choice4: 'The most important message was that they were messengers of Allah',
      answer: 3,
     },
     {
      question: 'Which prophet did Allah (swt) order to build an ark?',
      choice1: 'Isa',
      choice2: 'Nuh',
      choice3: 'Ibrahim',
      choice4: 'Dawud',
      answer: 2,
     },
     {
      question: 'Who is the last Messenger of Allah?',
      choice1: 'Isa',
      choice2: 'Yusuf',
      choice3: 'Zakariyah',
      choice4: 'Muhammad',
      answer: 4,
     },
     {
      question: 'How many prophets are mentioned in the Quran?',
      choice1: '25',
      choice2: '20',
      choice3: '4',
      choice4: '114',
      answer: 1,
     },
     {
      question: 'Which prophet did Allah (swt) directly speak to?',
      choice1: 'Musa',
      choice2: 'Dawud',
      choice3: 'Muhammad',
      choice4: 'Ishaq',
      answer: 1,
     },
     {
      question: 'Which prophet has been mentioned in the Quran as a friend of Allah (swt)?',
      choice1: 'Ibrahim',
      choice2: 'Musa',
      choice3: 'Muhammad',
      choice4: 'Yunus',
      answer: 1,
     },
     {
      question: 'How many Pillars of Islam are there?',
      choice1: '7',
      choice2: '6',
      choice3: '5',
      choice4: '10',
      answer: 3,
     },
     {
      question: 'Name all the Pillars of Islam',
      choice1: 'Obligatory Charity (Zakah), Fasting (Sawm), Pilgrimage (Hajj)',
      choice2: 'Belief (Shahadah), Prayers (Salaah), Obligatory Charity (Zakah), Fasting (Sawm), Pilgrimage (Hajj)',
      choice3: 'Belief (Shahadah), Prayers (Salaah), Fasting (Sawm), Pilgrimage (Hajj)',
      choice4: 'Belief (Shahadah), Prayers (Salaah), Obligatory Charity (Zakah), Pilgrimage (Hajj)',
      answer: 2,
     },
     {
      question: 'What did the Prophet Muhammad (PBUH) mention about the raising of daughters?',
      choice1: 'There is no mention about the raising of daughters by the Prophet (PBUH)',
      choice2: 'Daughters are ill omens and should not be given love and affection',
      choice3: 'Anyone who raises two daughters with love and affection will enter paradise',
      choice4: 'None of the options are correct',
      answer: 3,
     },
     {
      question: 'What did the Prophet Muhammad (PBUH) mention about the status of a Mother?',
      choice1: 'Mothers are not important at all',
      choice2: 'Paradise is beneath the feet of a mother',
      choice3: 'Mothers are bad omens',
      choice4: 'None of the above',
      answer: 2,
     },
     {
      question: 'What is mentioned about the equality of men and women in the Quran?',
      choice1: 'Men are always superior to women in all aspects',
      choice2: 'Women are always superior to men in all aspects',
      choice3: 'Men and women have the same religious and moral duties and responsibilities',
      choice4: 'None of the above',
      answer: 3,
     },
     {
      question: 'How many Articles of Faith are there in Islam?',
      choice1: '7',
      choice2: '6',
      choice3: '5',
      choice4: '10',
      answer: 2,
     },
     {
      question: 'Select the options that are included in the Articles of Faith',
      choice1: 'Belief in Allah (SWT)',
      choice2: 'Belief in Angels',
      choice3: 'Belief in the Messengers',
      choice4: 'All of the above',
      answer: 4,
     },
     {
      question: 'How many months are there in the Islamic calendar?',
      choice1: '12',
      choice2: '10',
      choice3: '7',
      choice4: '13',
      answer: 1,
     },
     {
      question: 'How many sacred months are there in Islam?',
      choice1: '4',
      choice2: '7',
      choice3: '10',
      choice4: '5',
      answer: 1,
     },
     {
      question: 'Why are the sacred months known as the sacred months?',
      choice1: 'Fighting is allowed',
      choice2: 'Fighting is prohibited',
      choice3: 'You can do whatever you want in these months',
      choice4: 'Just randomly chosen',
      answer: 2,
     },
     {
      question: 'Our lives are divided into how many sections?',
      choice1: '3',
      choice2: '5',
      choice3: '2',
      choice4: '4',
      answer: 1,
     },
     {
      question: 'What first happens in the grave when a person dies?',
      choice1: 'They are questioned',
      choice2: 'Rocks are thrown at them',
      choice3: 'They are beaten',
      choice4: 'They are fed food and water',
      answer: 1,
     },
     {
      question: 'When does the questioning in the grave begin?',
      choice1: 'Immediately when the person dies',
      choice2: 'In heaven',
      choice3: 'After the burial',
      choice4: 'After the soul is taken out',
      answer: 3,
     },
     {
      question: 'Which of these questions will we be asked in our graves?',
      choice1: 'Who is your Lord?',
      choice2: 'Who is your Prophet?',
      choice3: 'What is your Religion?',
      choice4: 'All of the above',
      answer: 4,
     },
     {
      question: 'which of these term describes the Al-Barzakh stage?',
      choice1: 'At birth',
      choice2: 'Starts after death and ends when the Hour begins',
      choice3: 'Al-Qiyamah',
      choice4: 'Grave',
      answer: 2,
     },
     {
      question: 'How many levels/gates does Jahannam have?',
      choice1: '9',
      choice2: '4',
      choice3: '7',
      choice4: '11',
      answer: 3,
     },
     {
      question: 'How many angels does Allah (swt) say look after Jahannam?',
      choice1: '20',
      choice2: '19',
      choice3: '6',
      choice4: '30',
      answer: 2,
     },
    {
      question: 'How many levels of Jannah are there?',
      choice1: '6',
      choice2: '7',
      choice3: '8',
      choice4: '10',
      answer: 2,
    },
    {
  question: 'How many doors of Jannah are there?',
  choice1: '8',
  choice2: '7',
  choice3: '6',
  choice4: '10',
  answer: 1,
    },
  ]
  
 
  const SCORE_POINTS = 1
  const MAX_QUESTIONS = 30
  
  startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
  };

  
  getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
      localStorage.setItem('mostRecentScore', score)

      return window.location.assign("final.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    mainProgress.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
  
    choices.forEach(choice => {
      const number = choice.dataset['number']
      choice.innerText = currentQuestion['choice' + number]
    })
  
    availableQuestions.splice(questionsIndex, 1)
    
    acceptingAnswers = true
  }
  
  choices.forEach(choice => {
      choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
          incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
          selectedChoice.parentElement.classList.remove(classToApply)
          getNewQuestion()

        }, 1000)
      })
  })

  incrementScore = num => {
    score +=num
    scoreText.innerText = score
  }

  startGame()
