import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Dots, DragIndicators } from "../../icons/Icons";
import CheckBox from "../../inputs/CheckBox";

const Tasks = [
  { id: 1, label: "Illustrations", checked: false },
  { id: 2, label: "Dashboard Builder", checked: false },
  { id: 3, label: "Landing Page Design", checked: false },
  { id: 4, label: "Promotional LP", checked: false },
  { id: 5, label: "Mobile App Design", checked: true },
];

const TaskItem = ({ task, index, moveTask }) => {
  const [, ref] = useDrag({
    type: "TASK",
    item: { id: task.id, index },
  });

  const [, drop] = useDrop({
    accept: "TASK",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveTask(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="flex justify-between items-center"
    >
      <CheckBox
        checked={task.checked}
        label={task.label}
        className="font-medium text-secondary dark:text-primary"
      />
      <DragIndicators className="fill-[#B0BBD5] dark:fill-primary" />
    </div>
  );
};

function MiniTasks() {
  const [tasks, setTasks] = useState(Tasks);

  const moveTask = (fromIndex, toIndex) => {
    const newTasks = [...tasks];
    const [removed] = newTasks.splice(fromIndex, 1);
    newTasks.splice(toIndex, 0, removed);
    setTasks(newTasks);
  };

  return (
    <div className="rounded-[20px] flex flex-col gap-[23px] bg-primary dark:bg-secondary w-full py-[26px] px-[21px]">
      <div className="flex justify-between">
        <CheckBox
          label="Tasks"
          className="text-[18px] font-bold text-secondary dark:text-primary"
        />

        <div className="bg-body-light dark:bg-base-blue w-[33px] h-[33px] rounded-[10px] flex items-center justify-center">
          <Dots className="w-6 h-6 fill-blue dark:fill-primary" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            index={index}
            moveTask={moveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default MiniTasks;
