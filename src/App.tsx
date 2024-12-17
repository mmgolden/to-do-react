import { useState } from "react";
import BaseCard from "./components/base/BaseCard";
import BaseButton from "./components/base/BaseButton";
import BaseCheckbox from "./components/base/BaseCheckbox";
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
                    <BaseCheckbox
                      id={`task-${task.id}`}
                      name={`task-${task.id}`}
                      value={task.id}
                      checked={task.completed}
                      onChange={onTaskChange}
                    />
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
