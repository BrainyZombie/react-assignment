import React from "react";

interface Problem {
  title: string;
  difficulty: string;
  acceptance: string;
}
function App() {
  const problems: Problem[] = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      acceptance: "47.7%",
    },
    {
      title: "Add Two Numbers",
      difficulty: "Medium",
      acceptance: "35.9%",
    },
    {
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      acceptance: "30.9%",
    },
    {
      title: "Median of Two Sorted Arrays",

      difficulty: "Hard",
      acceptance: "30.9%",
    },
    {
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      acceptance: "30.9%",
    },
    {
      title: "ZigZag Conversion",
      difficulty: "Medium",
      acceptance: "30.9%",
    },
    {
      title: "Reverse Integer",
      difficulty: "Easy",
      acceptance: "30.9%",
    },
  ];
  const [displayedState, setDisplayedState] = React.useState<Problem[]>([]);
  return (
    <>
      <div>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />
        <button>Sign In</button>
      </div>
      <br />
      <div>
        {(() => {
          let buttons: React.ReactNode[] = [];
          for (let i = 0; i < problems.length / 3; i++) {
            buttons.push(
              <button
                key={i.toString()}
                onClick={() =>
                  setDisplayedState(problems.slice(i * 3, i * 3 + 3))
                }
              >
                {i}
              </button>
            );
          }
          return buttons;
        })()}
      </div>
      <table>
        <tbody>
          {displayedState.map((problem) => (
            <ProblemStatement
              key={problem.title}
              title={problem.title}
              difficulty={problem.difficulty}
              acceptance={problem.acceptance}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

const ProblemStatement: React.FC<Problem> = (props) => {
  return (
    <tr
      style={{
        color:
          props.difficulty === "Easy"
            ? "green"
            : props.difficulty === "Medium"
            ? "orange"
            : props.difficulty === "Hard"
            ? "red"
            : "black",
      }}
    >
      <td>${props.title}</td>
      <td>${props.difficulty}</td>
      <td>${props.acceptance}</td>
    </tr>
  );
};

export default App;
