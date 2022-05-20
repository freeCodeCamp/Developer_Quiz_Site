import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SelectQuiz from "./components/SelectQuiz";
import WelcomePage from './components/WelcomePage';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

describe("Welcome Page", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WelcomePage start={undefined}/>, div);
  });
})