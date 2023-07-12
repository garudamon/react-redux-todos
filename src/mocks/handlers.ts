import { rest } from "msw";
import { VITE_API_URL } from "../utils/constants";

// mock data
export const todos = [
  {
    id: "16151687-d768-4441-8fff-7975761fdb24",
    title: "API Integration",
    complete: false,
  },
  {
    id: "23890e35-9fa2-420e-897d-7869228cf94f",
    title: "UAT",
    complete: false,
  },
  {
    id: "dd81f651-851d-4157-89ef-05278be7aa18",
    title: "Go Production",
    complete: false,
  },
];

export const handlers = [
  rest.get(`${VITE_API_URL}/todos`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  rest.delete(`${VITE_API_URL}/todos/${todos[0].id}`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.patch(`${VITE_API_URL}/todos/${todos[0].id}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...todos[0], title: "updating" }));
  }),
];
