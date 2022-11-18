import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getTodo,
  getTodos,
  createTodo,
  deleteTodo,
  updateTodoStatus,
} from "apis/todo";

const extractKeys = {
  fetchTodos: () => ["fetchTodoList"],
  fetchTodo: itemId => ["fetchTodo", itemId],
};

export const useFetchTodos = options => {
  return useQuery(extractKeys.fetchTodos(), () => getTodos(), options);
};

useFetchTodos.extractKey = extractKeys.fetchTodos;

export const useFetchTodo = (itemId, options) => {
  return useQuery(
    extractKeys.fetchTodo(itemId),
    () => getTodo(itemId),
    options,
  );
};

useFetchTodo.extractKey = extractKeys.fetchTodo;

export const useCreateTodo = options => {
  return useMutation(createTodo, options);
};

export const useDeleteTodo = options => {
  return useMutation(deleteTodo, options);
};

export const useUpdateTodoStatus = options => {
  return useMutation(updateTodoStatus, options);
};
