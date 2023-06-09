import { useReducer } from 'react';
import type { Reducer } from 'react';
import type { StreamMetaData } from '@7-docs/edge';

interface Interaction {
  input: string;
  output: string;
}

interface InteractionWithMetadata extends Interaction {
  metadata: StreamMetaData[] | null;
}

export interface Conversation extends Interaction {
  history: InteractionWithMetadata[];
}

type ActionType =
  | {
    type: 'setInput';
    value: string;
  }
  | {
    type: 'commit';
    value: string;
    metadata: StreamMetaData[] | null;
  }
  | {
    type: 'reset';
  };

const initialState = { input: '', output: '', history: [] };

const conversationReducer: Reducer<Conversation, ActionType> = (state, action) => {
  switch (action.type) {
    case 'setInput':
      return { ...state, input: action.value };
    case 'commit':
      return {
        input: '',
        output: '',
        history: [...state.history, {
          input: state.input,
          output: action.value,
          metadata: action.metadata,
        }],
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export const useConversation = (): [Conversation, (action: ActionType) => void] => {
  const [state, dispatch] = useReducer(conversationReducer, initialState);
  return [state, dispatch];
};
