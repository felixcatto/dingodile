export default {
  categories: {
    100: {
      id: '100',
      name: 'Category 100',
      parentCategoryId: null,
      isActive: true,
      isOpened: false,
      hasChildren: false,
    },
    101: {
      id: '101',
      name: 'Category 101',
      parentCategoryId: null,
      isActive: false,
      isOpened: false,
      hasChildren: true,
    },
    102: {
      id: '102',
      name: 'Category 102',
      parentCategoryId: '101',
      isActive: false,
      isOpened: false,
      hasChildren: false,
    },
  },
  tasks: {
    102: {
      id: '102',
      categoryId: '100',
      text: 'To-Do Item #1',
      isDone: false,
    },
    103: {
      id: '103',
      categoryId: '100',
      text: 'To-Do Item #2',
      isDone: true,
    },
    104: {
      id: '104',
      categoryId: '100',
      text: 'To-Do Item #3',
      isDone: false,
    },
  },
};
