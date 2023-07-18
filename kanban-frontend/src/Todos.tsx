import React from 'react';
import { useQuery } from 'react-query';

interface Todo {
  id: number;
  content: string;
}

const Todos = () => {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: async (): Promise<Todo[]> => {
      const res = await fetch('/api/notes');
      return res.json();
    },
  });

  return (
    <div>
      <h1>Todos</h1>
      <ul>{data?.map((todo) => <li key={todo.id}>{todo.content}</li>)}</ul>
    </div>
  );
};

export default Todos;
