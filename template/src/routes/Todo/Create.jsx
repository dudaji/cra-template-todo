import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateTodo, useFetchTodos } from "modules/todo";

function Create() {
  const [task, setTask] = useState("");
  const queryClient = useQueryClient();
  const { mutateAsync: createTodo } = useCreateTodo({
    onSuccess: () => {
      setTask("");
      queryClient.invalidateQueries({ queryKey: useFetchTodos.extractKey });
    },
  });

  const onChange = e => {
    setTask(e.target.value);
  };

  const onClickAdd = () => {
    createTodo({ task });
  };

  return (
    <div>
      <input value={task} onChange={onChange} />
      <button type="button" onClick={onClickAdd}>
        add
      </button>
    </div>
  );
}

export default Create;
