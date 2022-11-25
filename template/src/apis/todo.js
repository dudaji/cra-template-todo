import apiClient from "./apiClient";

export async function createTodo(params) {
  const { task } = params;
  return apiClient.post("/api/v1/todos", { task });
}

export function getTodos() {
  return apiClient.get("/api/v1/todos");
}

export function getTodo(todoId) {
  return apiClient.get(`/api/v1/todos/${todoId}`);
}

export function updateTodoStatus(params) {
  const { todoId, status } = params;
  return apiClient.put(`/api/v1/todos/${todoId}`, { status });
}

export async function deleteTodo(todoId) {
  return apiClient.delete(`/api/v1/todos/${todoId}`);
}
