const h1 = React.createElement('h1', null, 'Книжный интернет-магазин');

const initialBooks = [
    { title: 'Богатый папа', price: 5.0 },
    { title: 'Как стать Тагиром', price: 9999.0 },
    { title: 'Кто купит эту книгу тот крутой!', price: 500.0 },
  ];

class BookList extends React.Component {
  constructor() {
    super();
    this.state = {
      books: initialBooks,
      sorted: null,
    };
  }

  handleSort = (order) => {
    let sortedBooks = [...this.state.books];
    if (order === 'asc') {
      sortedBooks.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      sortedBooks.sort((a, b) => b.price - a.price);
    }
    this.setState({ books: sortedBooks, sorted: order });
  };

  render() {
    const bookElements = this.state.books.map((book, index) => (
      React.createElement('li', { key: index }, `${book.title} - ${book.price}`)
    ));

    return React.createElement('div', null, [
      React.createElement('div', null, [
        React.createElement('a', { href: '#', onClick: () => this.handleSort('asc'), className: this.state.sorted === 'asc' ? 'selected' : '' }, 'Цена ↑'),
        React.createElement('a', { href: '#', onClick: () => this.handleSort('desc'), className: this.state.sorted === 'desc' ? 'selected' : '' }, 'Цена ↓'),
      ]),
      React.createElement('ul', null, bookElements),
    ]);
  }
}

ReactDOM.render(React.createElement(BookList), document.getElementById('root'));

