import { useState, useEffect } from "react";

const LoadingText = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.total} />
          <StatisticLine
            text="average"
            value={(props.good - props.bad) / props.total}
          />
          <StatisticLine
            text="positive"
            value={(props.good / props.total) * 100 + " %"}
          />
        </tbody>
      </table>
    );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [loading, setLoading] = useState(true);

  const total = good + bad + neutral;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    loading === true ? (
        <LoadingText text="CHARGEMENT...." />
    ) : (
        <div>
        <h1>give feedback</h1>
  
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
  
        <h1>statistics</h1>
        {total !== 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
        ) : (
          <h3>No feedback given</h3>
        )}
      </div>
    )
  );
};

export default App;