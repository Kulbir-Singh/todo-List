import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  completedTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completedTask }: Props) => {
  return (
    <div>
      {task.taskName}
      {task.deadline}
      <button onClick={() => completedTask(task.taskName)}></button>
    </div>
  );
};

export default TodoTask;
