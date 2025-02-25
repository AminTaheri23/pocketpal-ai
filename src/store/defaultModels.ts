import {Model} from '../utils/types';
import {chatTemplates, defaultCompletionParams} from '../utils/chat';

export const MODEL_LIST_VERSION = 5;

export const defaultModels: Model[] = [
  {
    id: 'google/gemma-2-2b-it-GGUF',
    name: 'gemma-2-2b-it-GGUF (Q6_K)',
    type: 'Gemma',
    size: '2.15',
    params: '2',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/bartowski/gemma-2-2b-it-GGUF/resolve/main/gemma-2-2b-it-Q6_K.gguf?download=true',
    hfUrl: 'https://huggingface.co/bartowski/gemma-2-2b-it-GGUF',
    progress: 0,
    filename: 'gemma-2-2b-it-Q6_K.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.gemmaIt},
    chatTemplate: chatTemplates.gemmaIt,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.0,
      penalty_repeat: 1.0,
      stop: ['<end_of_turn>'],
    },
    completionSettings: {
      // https://huggingface.co/google/gemma-7b-it/discussions/38#65d7b14adb51f7c160769fa1
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.0,
      penalty_repeat: 1.0,
      stop: ['<end_of_turn>'],
    },
  },
  {
    id: 'google/gemma-1.1-2b-it-GGUF',
    name: 'gemma-1.1-2b-it-GGUF (Q6_K)',
    type: 'Gemma',
    size: '2.06',
    params: '2',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/bartowski/gemma-1.1-2b-it-GGUF/resolve/main/gemma-1.1-2b-it-Q6_K.gguf?download=true',
    hfUrl: 'https://huggingface.co/bartowski/gemma-1.1-2b-it-GGUF',
    progress: 0,
    filename: 'gemma-1.1-2b-it-Q6_K.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.gemmaIt},
    chatTemplate: chatTemplates.gemmaIt,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.0,
      penalty_repeat: 1.0,
      stop: ['<end_of_turn>'],
    },
    completionSettings: {
      // https://huggingface.co/google/gemma-7b-it/discussions/38#65d7b14adb51f7c160769fa1
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.0,
      penalty_repeat: 1.0,
      stop: ['<end_of_turn>'],
    },
  },
  {
    id: 'Gemmasutra-Mini-2B-v1-Q6_K.gguf',
    name: 'Gemmasutra-Mini-2B-v1-GGUF (Q6_K)',
    type: 'Gemma',
    size: '2.15',
    params: '2',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/TheDrummer/Gemmasutra-Mini-2B-v1-GGUF/resolve/main/Gemmasutra-Mini-2B-v1-Q6_K.gguf?download=true',
    hfUrl: 'https://huggingface.co/TheDrummer/Gemmasutra-Mini-2B-v1-GGUF',
    progress: 0,
    filename: 'Gemmasutra-Mini-2B-v1-Q6_K.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.gemmasutra},
    chatTemplate: chatTemplates.gemmasutra,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.7,
      penalty_repeat: 1.0,
      stop: ['<end_of_turn>'],
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.7,
      penalty_repeat: 1.0,
      stop: ['<end_of_turn>'],
    },
  },
  {
    id: 'h2o-danube3-4b-chat-Q4_K_M.gguf',
    name: 'H2O.ai Danube 3 (Q4_K_M)',
    type: 'Danube',
    size: '2.39',
    params: '3.96',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/h2oai/h2o-danube3-4b-chat-GGUF/resolve/main/h2o-danube3-4b-chat-Q4_K_M.gguf?download=true',
    hfUrl: 'https://huggingface.co/h2oai/h2o-danube3-4b-chat-GGUF',
    progress: 0,
    filename: 'h2o-danube3-4b-chat-Q4_K_M.gguf',
    isLocal: false,
    defaultChatTemplate: {
      ...chatTemplates.danube3,
    },
    chatTemplate: {
      ...chatTemplates.danube3,
    },
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.1,
      penalty_repeat: 1.075,
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.1,
      penalty_repeat: 1.075,
    },
  },
  {
    id: 'h2o-danube2-1.8b-chat-Q6_K.gguf',
    name: 'H2O.ai Danube 2 (Q6_K)',
    type: 'Danube',
    size: '1.50',
    params: '1.8',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/h2oai/h2o-danube2-1.8b-chat-GGUF/resolve/main/h2o-danube2-1.8b-chat-Q6_K.gguf?download=true',
    hfUrl: 'https://huggingface.co/h2oai/h2o-danube2-1.8b-chat-GGUF',
    progress: 0,
    filename: 'h2o-danube2-1.8b-chat-Q6_K.gguf',
    isLocal: false,
    defaultChatTemplate: {
      ...chatTemplates.danube2,
    },
    chatTemplate: {
      ...chatTemplates.danube2,
    },
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.1,
      penalty_repeat: 1.075,
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.1,
      penalty_repeat: 1.075,
    },
  },
  {
    id: 'h2o-danube2-1.8b-chat-Q5_K_S.gguf',
    name: 'H2O.ai Danube 2 (Q5_K_S)',
    type: 'Danube',
    size: '1.27',
    params: '1.8',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/h2oai/h2o-danube2-1.8b-chat-GGUF/resolve/main/h2o-danube2-1.8b-chat-Q5_K_S.gguf?download=true',
    hfUrl: 'https://huggingface.co/h2oai/h2o-danube2-1.8b-chat-GGUF',
    progress: 0,
    filename: 'h2o-danube2-1.8b-chat-Q5_K_S.gguf',
    isLocal: false,
    defaultChatTemplate: {
      ...chatTemplates.danube2,
    },
    chatTemplate: {
      ...chatTemplates.danube2,
    },
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      penalty_repeat: 1.075,
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      penalty_repeat: 1.075,
    },
  },
  {
    id: 'Phi-3.5-mini-instruct.Q4_K_M.gguf',
    name: 'Phi-3.5 mini 4k instruct (Q4_K_M)',
    type: 'Phi',
    size: '2.39',
    params: '3.8',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/QuantFactory/Phi-3.5-mini-instruct-GGUF/resolve/main/Phi-3.5-mini-instruct.Q4_K_M.gguf?download=true',
    hfUrl: 'https://huggingface.co/QuantFactory/Phi-3.5-mini-instruct-GGUF',
    progress: 0,
    filename: 'Phi-3.5-mini-instruct.Q4_K_M.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.phi3},
    chatTemplate: chatTemplates.phi3,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.1,
      stop: ['<|end|>'],
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.1,
      stop: ['<|end|>'],
    },
  },
  {
    id: 'Phi-3-mini-4k-instruct-q4.gguf',
    name: 'Phi-3.1 mini 4k instruct (Q4_K_M)',
    type: 'Phi',
    size: '2.39',
    params: '3.8',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/bartowski/Phi-3.1-mini-4k-instruct-GGUF/resolve/main/Phi-3.1-mini-4k-instruct-Q4_K_M.gguf?download=true',
    hfUrl: 'https://huggingface.co/bartowski/Phi-3.1-mini-4k-instruct-GGUF',
    progress: 0,
    filename: 'Phi-3.1-mini-4k-instruct-Q4_K_M.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.phi3},
    chatTemplate: chatTemplates.phi3,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.1,
      stop: ['<|end|>'],
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.1,
      stop: ['<|end|>'],
    },
  },
  {
    id: 'qwen2-1_5b-instruct-q8_0.gguf',
    name: 'Qwen2-1.5B-Instruct (Q8_0)',
    type: 'Qwen',
    size: '1.65',
    params: '1.54',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/Qwen/Qwen2-1.5B-Instruct-GGUF/resolve/main/qwen2-1_5b-instruct-q8_0.gguf?download=true',
    hfUrl: 'https://huggingface.co/Qwen/Qwen2-1.5B-Instruct-GGUF',
    progress: 0,
    filename: 'qwen2-1_5b-instruct-q8_0.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.qwen2},
    chatTemplate: chatTemplates.qwen2,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|im_end|>'],
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|im_end|>'],
    },
  },
  {
    id: 'qwen2.5-1.5b-instruct-q8_0.gguf',
    name: 'Qwen2.5-1.5B-Instruct (Q8_0)',
    type: 'Qwen',
    size: '1.89',
    params: '1.54',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF/resolve/main/qwen2.5-1.5b-instruct-q8_0.gguf?download=true',
    hfUrl: 'https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF',
    progress: 0,
    filename: 'qwen2.5-1.5b-instruct-q8_0.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.qwen25},
    chatTemplate: chatTemplates.qwen25,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|im_end|>'],
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|im_end|>'],
    },
  },
  {
    id: 'qwen2.5-3b-instruct-q5_0.gguf',
    name: 'Qwen2.5-3B-Instruct (Q5_0)',
    type: 'Qwen',
    size: '2.38',
    params: '3.09',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/Qwen/Qwen2.5-3B-Instruct-GGUF/resolve/main/qwen2.5-3b-instruct-q5_0.gguf?download=true',
    hfUrl: 'https://huggingface.co/Qwen/Qwen2.5-3B-Instruct-GGUF',
    progress: 0,
    filename: 'qwen2.5-3b-instruct-q5_0.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.qwen25},
    chatTemplate: chatTemplates.qwen25,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|im_end|>'],
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|im_end|>'],
    },
  },
  {
    id: 'default-llama-3.2-1b-instruct-q8_0.gguf',
    name: 'llama-3.2-1b-instruct (Q8_0)',
    type: 'Llama',
    size: '1.32',
    params: '1.23',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/hugging-quants/Llama-3.2-1B-Instruct-Q8_0-GGUF/resolve/main/llama-3.2-1b-instruct-q8_0.gguf?download=true',
    hfUrl:
      'https://huggingface.co/hugging-quants/Llama-3.2-1B-Instruct-Q8_0-GGUF',
    progress: 0,
    filename: 'default-llama-3.2-1b-instruct-q8_0.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.llama32},
    chatTemplate: chatTemplates.llama32,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|eot_id|>'],
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|eot_id|>'],
    },
  },
  {
    id: 'llama-3.2-3b-instruct-q4_k_m.gguf',
    name: 'llama-3.2-3b-instruct (Q4_K)',
    type: 'Llama',
    size: '2.02',
    params: '3.21',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/hugging-quants/Llama-3.2-3B-Instruct-Q4_K_M-GGUF/resolve/main/llama-3.2-3b-instruct-q4_k_m.gguf?download=true',
    hfUrl:
      'https://huggingface.co/hugging-quants/Llama-3.2-3B-Instruct-Q4_K_M-GGUF',
    progress: 0,
    filename: 'llama-3.2-3b-instruct-q4_k_m.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.llama32},
    chatTemplate: chatTemplates.llama32,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|eot_id|>'],
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|eot_id|>'],
    },
  },
  {
    id: 'Llama-3.2-3B-Instruct-Q6_K.gguf',
    name: 'Llama-3.2-3B-Instruct (Q6_K)',
    type: 'Llama',
    size: '2.64',
    params: '3.21',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/bartowski/Llama-3.2-3B-Instruct-GGUF/resolve/main/Llama-3.2-3B-Instruct-Q6_K.gguf?download=true',
    hfUrl: 'https://huggingface.co/bartowski/Llama-3.2-3B-Instruct-GGUF',
    progress: 0,
    filename: 'Llama-3.2-3B-Instruct-Q6_K.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.llama32},
    chatTemplate: chatTemplates.llama32,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|eot_id|>'],
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|eot_id|>'],
    },
  },
  // TODO: Add memory check for this model
  {
    id: 'llama-3.2-3b-instruct-q8_0.gguf',
    name: 'llama-3.2-3b-instruct q8_k',
    type: 'Llama',
    size: '3.42',
    params: '3.21',
    isDownloaded: false,
    downloadUrl:
      'https://huggingface.co/hugging-quants/Llama-3.2-3B-Instruct-Q8_0-GGUF/resolve/main/llama-3.2-3b-instruct-q8_0.gguf?download=true',
    hfUrl:
      'https://huggingface.co/hugging-quants/Llama-3.2-3B-Instruct-Q8_0-GGUF',
    progress: 0,
    filename: 'llama-3.2-3b-instruct-q8_0.gguf',
    isLocal: false,
    defaultChatTemplate: {...chatTemplates.llama32},
    chatTemplate: chatTemplates.llama32,
    defaultCompletionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|eot_id|>'],
    },
    completionSettings: {
      ...defaultCompletionParams,
      n_predict: 500,
      temperature: 0.5,
      stop: ['<|eot_id|>'],
    },
  },
];
