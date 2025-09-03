import React, { useState } from 'react';
import { Star, Volume2, ArrowRight, Home, Book, Gamepad2, Trophy } from 'lucide-react';

const HellyEnglishTutor = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLesson, setCurrentLesson] = useState(null);
  const [stars, setStars] = useState(12);
  const [gameScore, setGameScore] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const progress = {
    week1: 85,
    week2: 60,
    week3: 0,
    week4: 0,
    week5: 0,
    week6: 0,
    week7: 0
  };

  const lessons = {
    week1: {
      title: "અક્ષર અને અવાજ (Alphabet & Phonics)",
      subtitle: "A થી Z સુધીના અક્ષરો શીખો",
      icon: "📝",
      progress: progress.week1,
      activities: [
        { id: 'phonics_a_to_e', title: 'A થી E અક્ષરો', description: 'A for Apple, B for Ball...', type: 'phonics' },
        { id: 'letter_sounds', title: 'અક્ષરોના અવાજો', description: 'દરેક અક્ષરનો સાચો અવાજ શીખો', type: 'audio' },
        { id: 'letter_match', title: 'અક્ષર મેચિંગ ગેમ', description: 'ચિત્ર સાથે અક્ષર મેળવો', type: 'game' }
      ]
    },
    week2: {
      title: "સામાન્ય વસ્તુઓ (Basic Words)",
      subtitle: "રોજબરોજની વસ્તુઓના નામ",
      icon: "🏠",
      progress: progress.week2,
      activities: [
        { id: 'basic_nouns', title: 'મૂળભૂત શબ્દો', description: 'Book, Pen, Cat, Dog', type: 'vocabulary' }
      ]
    }
  };

  const phonicsContent = [
    { letter: 'A', word: 'Apple', gujarati: 'સફરજન', image: '🍎', sound: '/æ/' },
    { letter: 'B', word: 'Ball', gujarati: 'બોલ', image: '⚽', sound: '/b/' },
    { letter: 'C', word: 'Cat', gujarati: 'બિલાડી', image: '🐱', sound: '/k/' }
  ];

  const playWord = (word) => {
    console.log(`Playing audio for: ${word}`);
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    if (answer === 'correct') {
      setGameScore(gameScore + 1);
      setStars(stars + 1);
      setTimeout(() => {
        if (currentStep < phonicsContent.length - 1) {
          setCurrentStep(currentStep + 1);
          setShowFeedback(false);
          setSelectedAnswer(null);
        }
      }, 2000);
    } else {
      setTimeout(() => {
        setShowFeedback(false);
        setSelectedAnswer(null);
      }, 2000);
    }
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 pt-8">
          <div className="bg-white rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-lg">
            <div className="text-6xl">👩‍🏫</div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Hiya Tutor</h1>
          <p className="text-xl text-white/90">હેલીની અંગ્રેજી મિત્ર</p>
        </div>

        <div className="bg-white/95 backdrop-blur rounded-3xl p-8 mb-8 shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">નમસ્તે હેલી! 👋</h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              ચાલો આપણે સાથે અંગ્રેજી શીખીએ મજા સાથે!<br/>
              આજે તું શું શીખવા માંગે છે?
            </p>
            <button
              onClick={() => setCurrentPage('lessons')}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              ચાલો શરૂ કરીએ! 🚀
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-100 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">⭐</div>
            <p className="text-2xl font-bold text-yellow-600">{stars}</p>
            <p className="text-gray-600">સ્ટાર્સ</p>
          </div>
          <div className="bg-purple-100 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">🏅</div>
            <p className="text-2xl font-bold text-purple-600">2</p>
            <p className="text-gray-600">બેજ</p>
          </div>
          <div className="bg-green-100 rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl mb-2">📚</div>
            <p className="text-2xl font-bold text-green-600">2/7</p>
            <p className="text-gray-600">અઠવાડિયા પૂરા</p>
          </div>
        </div>
      </div>
    </div>
  );

  const LessonsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-blue-400 to-teal-400 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 pt-4">
          <div className="flex items-center">
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-white/20 backdrop-blur rounded-full p-3 mr-4 hover:bg-white/30 transition-all"
            >
              <Home className="w-6 h-6 text-white" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white">પાઠ યોજના</h1>
              <p className="text-white/80">તારો કોર્સ પ્રગ્રેસ</p>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur rounded-full px-6 py-3">
            <span className="text-white font-bold">⭐ {stars} સ્ટાર્સ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.entries(lessons).map(([weekId, lesson]) => (
            <div
              key={weekId}
              className={`bg-white/95 backdrop-blur rounded-3xl p-6 shadow-2xl transition-all duration-300 hover:shadow-3xl hover:scale-105 ${
                lesson.progress > 0 ? 'border-2 border-green-400' : 'border-2 border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-4xl mr-4">{lesson.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{lesson.title}</h3>
                    <p className="text-gray-600">{lesson.subtitle}</p>
                  </div>
                </div>
                {lesson.progress === 100 && <div className="text-green-500 text-2xl">✅</div>}
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>પ્રગતિ</span>
                  <span>{lesson.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${lesson.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {lesson.activities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        {activity.type === 'phonics' && '🔤'}
                        {activity.type === 'audio' && '🔊'}
                        {activity.type === 'game' && '🎮'}
                        {activity.type === 'vocabulary' && '📖'}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentLesson(weekId);
                  setCurrentPage('lesson');
                }}
                disabled={weekId === 'week3'}
                className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                  lesson.progress > 0
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg'
                    : weekId === 'week1' || weekId === 'week2'
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white hover:shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {lesson.progress === 0 ? 'શરૂ કરો' : lesson.progress === 100 ? 'પુનરાવર્તન કરો' : 'આગળ વધો'}
                {(weekId === 'week1' || weekId === 'week2' || lesson.progress > 0) && 
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                }
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const LessonPage = () => {
    const lesson = lessons[currentLesson];
    const currentContent = phonicsContent[currentStep] || phonicsContent[0];

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6 pt-4">
            <button
              onClick={() => setCurrentPage('lessons')}
              className="bg-white/20 backdrop-blur rounded-full p-3 hover:bg-white/30 transition-all"
            >
              <ArrowRight className="w-6 h-6 text-white rotate-180" />
            </button>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">{lesson?.title}</h1>
              <p className="text-white/80">પાઠ {currentStep + 1}/{phonicsContent.length}</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-full px-4 py-2">
              <span className="text-white font-bold">⭐ {stars}</span>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-3xl p-8 mb-6 shadow-2xl">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">👩‍🏫</span>
              </div>
              <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                <p className="text-lg text-gray-800 font-medium">
                  {!showFeedback ? (
                    <span>
                      "હેલો હેલી! ચાલ આપણે <strong>{currentContent.letter}</strong> અક્ષર શીખીએ. <br/>
                      <strong>{currentContent.letter} for {currentContent.word}</strong> 
                      <span className="text-2xl ml-2">{currentContent.image}</span><br/>
                      ગુજરાતીમાં કહેવાય: <strong>{currentContent.gujarati}</strong>"
                    </span>
                  ) : selectedAnswer === 'correct' ? (
                    <span className="text-green-600 font-bold">
                      "વાહ! ખૂબ સરસ! તું બહુ સ્માર્ટ છે! 🌟 ⭐"
                    </span>
                  ) : (
                    <span className="text-orange-600 font-bold">
                      "કોઈ વાંધો નથી! ફરી પ્રયાસ કરીશ? હું તને મદદ કરીશ! 💪"
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur rounded-3xl p-8 mb-6 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{currentContent.image}</div>
              <div className="text-6xl font-bold text-blue-600 mb-2">{currentContent.letter}</div>
              <div className="text-3xl font-semibold text-gray-800 mb-2">{currentContent.word}</div>
              <div className="text-xl text-gray-600 mb-4">({currentContent.gujarati})</div>
              
              <button
                onClick={() => playWord(currentContent.word)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Volume2 className="inline w-5 h-5 mr-2" />
                અવાજ સાંભળો
              </button>
            </div>

            {!showFeedback && (
              <div className="mt-8">
                <p className="text-xl text-center text-gray-700 mb-6 font-semibold">
                  આ કયું અક્ષર છે? યોગ્ય જવાબ પસંદ કરો:
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { letter: currentContent.letter, correct: true },
                    { letter: currentContent.letter === 'A' ? 'B' : 'A', correct: false },
                    { letter: currentContent.letter === 'C' ? 'D' : 'C', correct: false }
                  ].sort(() => Math.random() - 0.5).map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.correct ? 'correct' : 'wrong')}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 px-6 rounded-2xl text-4xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {option.letter}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showFeedback && (
              <div className="text-center mt-8">
                <div className={`text-8xl mb-4 ${selectedAnswer === 'correct' ? 'animate-bounce' : 'animate-pulse'}`}>
                  {selectedAnswer === 'correct' ? '🎉' : '💪'}
                </div>
                {selectedAnswer === 'correct' && (
                  <div className="bg-green-100 rounded-2xl p-6">
                    <p className="text-green-800 text-xl font-bold">તારો જવાબ બરાબર છે! +1 ⭐</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const NavigationBar = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200 p-4 z-50">
      <div className="flex justify-center space-x-8">
        <button
          onClick={() => setCurrentPage('home')}
          className={`flex flex-col items-center p-2 rounded-xl transition-all ${
            currentPage === 'home' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
          }`}
        >
          <Home className="w-6 h-6 mb-1" />
          <span className="text-xs">હોમ</span>
        </button>
        <button
          onClick={() => setCurrentPage('lessons')}
          className={`flex flex-col items-center p-2 rounded-xl transition-all ${
            currentPage === 'lessons' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
          }`}
        >
          <Book className="w-6 h-6 mb-1" />
          <span className="text-xs">પાઠ</span>
        </button>
        <button
          onClick={() => setCurrentPage('games')}
          className={`flex flex-col items-center p-2 rounded-xl transition-all ${
            currentPage === 'games' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
          }`}
        >
          <Gamepad2 className="w-6 h-6 mb-1" />
          <span className="text-xs">ગેમ</span>
        </button>
        <button
          onClick={() => setCurrentPage('progress')}
          className={`flex flex-col items-center p-2 rounded-xl transition-all ${
            currentPage === 'progress' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
          }`}
        >
          <Trophy className="w-6 h-6 mb-1" />
          <span className="text-xs">પ્રગતિ</span>
        </button>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'lessons':
        return <LessonsPage />;
      case 'lesson':
        return <LessonPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-sans">
      {renderCurrentPage()}
      {currentPage !== 'lesson' && <NavigationBar />}
    </div>
  );
};

export default HellyEnglishTutor;