import apiClient from "./apiClient";

export async function createTodo(params) {
  const { task } = params;
  const response = await apiClient.post("/api/v1/todos", { task });
  return response.data;
}

// export async function getTodos() {
//   const response = await apiClient.get("/api/v1/todos");
//   return response.data;
// }
export function getTodos() {
  return apiClient.get("/api/v1/todos");
  // return response.data;
}

export async function getTodo(todoId) {
  const response = await apiClient.get(`/api/v1/todos/${todoId}`);
  return response.data;
}

export async function updateTodoStatus(params) {
  const { todoId, status } = params;
  const response = await apiClient.put(`/api/v1/todos/${todoId}`, { status });
  return response.data;
}

export async function deleteTodo(todoId) {
  const response = await apiClient.delete(`/api/v1/todos/${todoId}`);
  return response.data;
}
