import { useQueryClient } from "@tanstack/react-query";
import {
  useFetchTodos,
  useDeleteTodo,
  useUpdateTodoStatus,
} from "modules/todo";
import parseTodoList from "utils/parseTodoList";

function List() {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useFetchTodos({
    select: result => parseTodoList(result.data),
  });
  const { mutateAsync: deleteTodo } = useDeleteTodo({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: useFetchTodos.extractKey });
    },
  });
  const { mutateAsync: updateTodoStatus } = useUpdateTodoStatus({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: useFetchTodos.extractKey });
    },
  });

  const onClickDelete = todoId => {
    deleteTodo(todoId);
  };

  const onClickTodo = (todoId, nextStatus) => {
    updateTodoStatus({ todoId, status: nextStatus });
  };

  if (isLoading)
    return (
      <div className="App">
        <h1>isLoading...</h1>
      </div>
    );

  if (isError)
    return (
      <div className="App">
        <h1>{error}</h1>
      </div>
    );

  return (
    <div>
      <ul>
        {data.map(v => (
          <li key={v.key} style={{ cursor: "pointer" }}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <span
              style={{ textDecoration: v.status ? "line-through" : "unset" }}
              onClick={() => onClickTodo(v.key, !v.status)}
            >
              {v.task}
            </span>
            <button type="button" onClick={() => onClickDelete(v.key)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
