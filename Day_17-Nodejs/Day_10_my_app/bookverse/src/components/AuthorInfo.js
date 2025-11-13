import React, { Component, createRef } from "react";

class AuthorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: {
        name: "James Clear",
        bio: "James Clear is the author of 'Atomic Habits', focusing on habits and productivity.",
        topBooks: ["Atomic Habits", "Transform Your Habits", "The Clear Thinking Mind"]
      }
    };

    // Ref for focusing input
    this.searchRef = createRef();
  }

  componentDidMount() {
    console.log("Author data loaded successfully!");
  }

  focusSearch = () => {
    this.searchRef.current.focus();
  };

  render() {
    const { author } = this.state;
    return (
      <div className="card p-3 my-4">
        <h3 className="mb-3">Author Details</h3>
        <p><strong>Name:</strong> {author.name}</p>
        <p>{author.bio}</p>
        <h5>Top Books:</h5>
        <ul>
          {author.topBooks.map((book, i) => (
            <li key={i}>{book}</li>
          ))}
        </ul>
        <div className="mt-3">
          <input
            type="text"
            ref={this.searchRef}
            className="form-control"
            placeholder="Type something..."
          />
          <button className="btn btn-primary mt-2" onClick={this.focusSearch}>
            Focus on Input
          </button>
        </div>
      </div>
    );
  }
}

export default AuthorInfo;
