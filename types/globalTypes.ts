export interface Todo {
  id?: string;
  title: string;
  order?: number;
  description?: string;
  completed: boolean;
  url: string;
}

export interface ResponseBackend {
  title: string;
  order: number;
  completed: boolean;
  url: string;
}

export interface State {
  todo: Todo[];
}
