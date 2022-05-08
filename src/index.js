import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import allReducer from './reducers/root_reducers';
import { Provider } from 'react-redux';
import Exercise from "./pages/exercise/Exercise";
import Introduction from './pages/introduction/Introduction';
import ParticipantInfo from './pages/participant/ParticipantInfo';
import ThankYou from './pages/thankyou/ThankYou';

const store = createStore(allReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Provider store={store}> <App /></Provider>}>
          <Route path="" element={<Introduction />} />
          <Route path="participant" element={<ParticipantInfo />} />
          <Route path=":experimentId/exercise" element={<Exercise />} />
          <Route path="thankyou" element={<ThankYou />} />
          <Route
            path="*"
            element={
              <main>
                <p>please go back <Link to="/">home</Link></p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
