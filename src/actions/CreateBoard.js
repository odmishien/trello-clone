export default function createBoard (title) {
  return {
    type: 'CREATE_BOARD',
    payload: {title: title}
  }
}
