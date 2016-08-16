import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/questionlist.jsx'
import Scorebox from './quiz/scorebox.jsx'
import Results from './quiz/results.jsx'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
              {
                id: 'a',
                text: 'Michael'
              },
              {
                id: 'b',
                text: 'Brad'
              },
              {
                id: 'c',
                text: 'Steven'
              }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'What is your favorite fruit?',
          choices: [
              {
                id: 'a',
                text: 'Apples'
              },
              {
                id: 'b',
                text: 'Bananas'
              },
              {
                id: 'c',
                text: 'Watermelon'
              }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: 'What is your favorite movie?',
          choices: [
              {
                id: 'a',
                text: 'Zootopia'
              },
              {
                id: 'b',
                text: 'Frozen'
              },
              {
                id: 'c',
                text: 'Forest Gump'
              }
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'What is your favorite food?',
          choices: [
              {
                id: 'a',
                text: 'Pizza'
              },
              {
                id: 'b',
                text: 'Sushi'
              },
              {
                id: 'c',
                text: 'Sandwiches'
              }
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    }
  }

  setCurrent(current){
      this.setState({
          current
      });
  }

  setScore(score){
      this.setState({
          score
      });
  }

  render(){

    if(this.state.current > this.state.questions.length){
        var scorebox = '';
        var results = <Results {...this.state} />
    } else {
        var scorebox = <Scorebox {...this.state} />;
        var results = '';
    }

    return (
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent = {this.setCurrent.bind(this)}
        setScore = {this.setScore.bind(this)} />
        {results}
      </div>
    )
  }
}

export default App
