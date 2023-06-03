import { io, Socket } from 'socket.io-client';

import { ServerToClientEvents, ClientToServerEvents } from './types';

export const socketWriteText: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:4000');