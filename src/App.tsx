import { useState } from "react";
import BaseCard from "./components/base/BaseCard";
import BaseButton from "./components/base/BaseButton";
import taskData from "./tasks.json";
import type { Task } from "./types";

function App() {
  const [tasks] = useState<Task[]>(taskData);

  const [completedTasks, setCompletedTasks] = useState<Array<number>>(
    tasks.filter((task) => task.completed).map((task) => task.id)
  );

  const onTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let tasks = [...completedTasks];

    if (e.target.checked) {
      tasks.push(parseInt(e.target.value));
    } else {
      tasks = tasks.filter((id) => id !== parseInt(e.target.value));
    }

    setCompletedTasks(tasks);
  };

  const handleClick = () => {
    console.log("new task");
  };

  return (
    <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl">
        <BaseCard>
          <BaseCard.Header>
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
              <div className="ml-4 mt-2">
                <h3 className="text-base font-semibold text-gray-900">
                  Task List
                </h3>
              </div>
              <div className="ml-4 mt-2 shrink-0">
                <BaseButton onClick={handleClick}>New Task</BaseButton>
              </div>
            </div>
          </BaseCard.Header>
          <BaseCard.Content>
            <div className="divide-y divide-gray-200 border-b border-gray-200">
              {tasks.map((task, index) => (
                <div key={index} className="relative flex gap-3 py-4 px-4">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        defaultChecked={task.completed}
                        id={`task-${task.id}`}
                        name={`task-${task.id}`}
                        type="checkbox"
                        value={task.id}
                        className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        onChange={onTaskChange}
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-[:checked]:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-[:indeterminate]:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 text-sm/6">
                    <label
                      htmlFor={`task-${task.id}`}
                      className={`${
                        completedTasks.includes(task.id)
                          ? "text-gray-400 line-through"
                          : "text-gray-900"
                      } select-none font-medium`}
                    >
                      {task.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </BaseCard.Content>
        </BaseCard>
      </div>
    </main>
  );
}

export default App;
