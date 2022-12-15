export default function findByName(value, store) {
  return store.find((data) => data.name.toLowerCase() === value.toLowerCase());
}