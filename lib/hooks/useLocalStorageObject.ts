export const useLocalStorageObject = () => {
  const get = (key: string) => {
    const localStorageObject = localStorage.getItem(key);

    if (localStorageObject) {
      return JSON.parse(localStorageObject);
    }
    return null;
  };

  const set = (key: string, obj: { [key: string]: unknown }) => {
    localStorage.setItem(key, JSON.stringify(obj));
  };

  const remove = (key: string) => {
    localStorage.removeItem(key);
  };

  return { get, set, remove };
};
