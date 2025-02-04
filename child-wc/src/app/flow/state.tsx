import { setup, fromPromise, assign } from "xstate";
import { IMockApiRequest, mockApiRequest } from "./api";

interface FlowContext {
  name: string;
  response: string;
  data: {
    greeting: string;
  } | null;
}

export const flowMachine = setup({
  types: {
    context: {} as FlowContext,
  },
  actors: {
    fetchUser: fromPromise<IMockApiRequest, string>(
      async ({ input }: { input: string }) => {
        const x = mockApiRequest(input);
        return x;
      },
    ),
  },
}).createMachine({
  initial: "step1",
  context: {
    name: "test",
    response: "",
    data: null,
  },
  states: {
    step1: {
      on: {
        NEXT: {
          target: "step2",
        },
      },
      invoke: {
        src: "fetchUser",
        input: ({ context }) => context.name,
        onDone: {
          // target: "step2",
          actions: assign({
            name: "test-step1",
            response: ({ event }) => event.output.name,
          }),
        },
        onError: "failure",
      },
    },
    step2: {
      on: {
        NEXT: {
          target: "step3",
        },
        BACK: {
          target: "step1",
        },
      },
      invoke: {
        src: "fetchUser",
        input: ({ context }) => context.name,
        onDone: {
          actions: assign({
            name: () => "test-step2",
            response: ({ event }) => event.output.name,
          }),
        },
        onError: "failure",
      },
    },
    step3: {
      actions: assign({
        name: () => "test-step3",
      }),
      type: "final",
    },
    failure: {
      type: "final",
    },
  },
});

export default flowMachine;
