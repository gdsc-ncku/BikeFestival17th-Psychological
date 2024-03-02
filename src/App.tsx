import {
  CSSProperties,
  ReactElement,
  useEffect,
  useState,
} from "react";

import StartPage from "./pages/start/StartPage";
import QuestionPage from "./pages/question";
import ResultPage from "./pages/result";

import pageContent from "./data/content";

import "./App.scss";

export default function App(): ReactElement {
  const [response, setResponse] = useState<Array<0 | 1> | undefined>();
  // const [response, setResponse] = useState<Array<0 | 1> | undefined>([0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    console.log(response)
  }, [response]);

  return (
    <div id="app">
      <div className="content">
        <img alt="logo" src={`${process.env.PUBLIC_URL}/img/logo.svg`} className="logo" />
        <StartPage start={() => { setResponse([]) }} show={response === undefined} />
        {
          pageContent.map((data, i) => <QuestionPage
            key={i}
            show={response !== undefined && response.length === i}
            context={data.context}
            options={data.options}
            next={(v) => setResponse(lis => lis === undefined ? [v] : [...lis, v])}
          />)
        }
        <ResultPage
          show={response !== undefined && response.length === 8}
          response={response ?? []}
        />
        <div
          className="process road"
          data-show={response !== undefined && response.length < 8}
        >
          <img
            alt="process-icon"
            src={`${process.env.PUBLIC_URL}/img/bike-ico.svg`}
            style={{
              "--process": response?.length
            } as CSSProperties}
          />
          <svg>
            <line x1={0} y1={0} x2={"100%"} y2={0} />
          </svg>
        </div>
      </div>
    </div>
  )
}
