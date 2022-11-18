// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";
import generateRandomString from "utils/generateRandomString";

const todos = {
  todo1: { task: "build an API", status: false },
  todo2: { task: "task2", status: false },
  todo3: { task: "task3", status: false },
};

const handlers = [
  rest.post("/api/v1/todos", async (req, res, ctx) => {
    const task = await req.json();
    const todoId = generateRandomString();
    todos[todoId] = { ...task, status: false };
    return res(ctx.status(201), ctx.json({ [todoId]: task }));
  }),
  rest.get("/api/v1/todos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),
  rest.delete("/api/v1/todos/:todoId", (req, res, ctx) => {
    const { todoId } = req.params;
    const task = { [todoId]: { ...todos[todoId] } };
    delete todos[todoId];
    return res(ctx.status(200), ctx.json(task));
  }),
  rest.put("/api/v1/todos/:todoId", async (req, res, ctx) => {
    const { todoId } = req.params;
    const { status } = await req.json();
    todos[todoId].status = status;
    return res(ctx.status(200));
  }),
];

export default handlers;
