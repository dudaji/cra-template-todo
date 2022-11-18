/**
### before
{todo1: {task: 'task1' }, todo2: {task: 'task2'}}

### after
[{ key: 'todo1', task: 'task1' }, { key: 'todo2', task: 'task2' }]
*/
export default data =>
  Object.entries(data).map(([key, value]) => ({
    key,
    ...value,
  }));
