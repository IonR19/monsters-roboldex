import React, { Component, useEffect, useState } from "react";
import CardList from "./CardList";
import SearchInput from "./SearchInput";
import "./App.css";

const AppV2 = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`).then(async (response) => {
      const res = await response.json();
      setMonsters(res);
    });
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchInput placeholder="Search Monsters..." handleChange={handleChange} />
      <CardList
        monsters={monsters.filter((monster) =>
          monster.name.toLowerCase().includes(searchTerm.toLowerCase())
        )}
      />
    </div>
  );
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`).then(async (response) => {
      const res = await response.json();
      this.setState({
        monsters: res,
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchInput placeholder="Search Monsters..." handleChange={this.handleChange} />
        <CardList
          monsters={this.state.monsters.filter((monster) =>
            monster.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          )}
        />
      </div>
    );
  }
}

export default AppV2;
