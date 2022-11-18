// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from "msw";
import todoHandlers from "./todoHandlers";

// eslint-disable-next-line import/prefer-default-export
export const worker = setupWorker(...todoHandlers);
