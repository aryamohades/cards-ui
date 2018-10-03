export const getObjectFromStorage = (key) => {
  const o = localStorage.getItem(key);

  if (!o) {
    return {};
  }

  try {
    return JSON.parse(o);
  } catch (e) {
    return {};
  }
};

export const setItemInStorage = (key, value) => {
  localStorage.setItem(key, value);
};

export const setObjectInStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const subscribe = (store, types, cb) => {
  const typeSet = new Set(types);

  store.subscribe((mutation) => {
    const { type } = mutation;

    if (typeSet.has(type)) {
      cb();
    }
  });
};
