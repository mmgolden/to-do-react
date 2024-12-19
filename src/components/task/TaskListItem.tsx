import BaseCheckbox from "@/components/base/BaseCheckbox";
import type { Task } from "@/types";

interface Props {
  task: Task;
  completedTasks: Array<number>;
  onTaskChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TaskListItem({
  task,
  completedTasks,
  onTaskChange
}: Props) {
  return (
    <div className="relative flex gap-3 py-4 px-4">
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
  );
}
