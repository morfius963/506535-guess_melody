import {QuestionArtist, QuestionGenre} from "../../types";

type Question = QuestionArtist | QuestionGenre;
type GameResult = `` | `win` | `lose-time` | `lose-mistakes`;
type UserData = {
  email: string,
  password: string
};

export interface Props {
  time: number,
  timeForGame: number,
  questions: Question[],
  questionStep: number,
  mistakes: number,
  maxMistakes: number,
  points: number,
  quickAnswerCount: number,
  isLoading: boolean,
  isAuthorizationRequired: boolean,
  gameResult: GameResult,

  onWelcomeScreenClick: () => void,
  onUserAnswer: (
      userAnswer: string | boolean[],
      question: Question,
      mistakes: number,
      maxMistakes: number,
      currentQuestionIndex: number,
      maxQuestionIndex: number,
      answerTime: number
  ) => void,
  onTimeUpdate: () => void,
  onTimeEnd: () => void,
  resetGame: () => void,
  restartGame: () => void,
  loadQuestions: () => void,
  registrateTimer: (id: number) => void,
  postUserLogin: (userData: UserData, pushPath: () => void) => void
};