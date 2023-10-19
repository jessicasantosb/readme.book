export const getComments = async () => {
  return [
    {
      id: "1",
      body: "First comment",
      username: "Jessica",
      userId: "1",
      parentId: null,
      createdAt: "01-10-2023",
    },
    {
      id: "2",
      body: "Second comment",
      username: "Alice",
      userId: "2",
      parentId: null,
      createdAt: "02-10-2023",
    },
    {
      id: "3",
      body: "First comment child",
      username: "João",
      userId: "2",
      parentId: "1",
      createdAt: "01-10-2023",
    },
    {
      id: "4",
      body: "Second comment child",
      username: "Pedro",
      userId: "2",
      parentId: "2",
      createdAt: "10-10-2023",
    },
  ];
};

export const createComment = async (text, parentId = null) => {

  const date = new Date()

  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Jessica",
    createdAt: date
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
