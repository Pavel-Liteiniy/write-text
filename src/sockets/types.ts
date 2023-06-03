export type ServerToClientEvents = {
  promptCreated: (response: {
    prompt: string;
    status: string;
  }) => void;
  exception: (response: {
    message: string;
    status: string;
  }) => void;
};

export type ClientToServerEvents = {
  createPrompt: (request: {
    text: string;
  }) => void;
};
