import queryString from "query-string";
import React, { useEffect, useState } from "react";
import "./App.scss";
import BetterClock from "./components/BetterClock";
import Clock from "./components/Clock";
import MagicColor from "./components/MagicColor";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to get Fetch", error.message);
      }
    }
    fetchPostList();
  }, [filters]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;
    // clone array to the new one
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    console.log("formvalue:", formValues);
    const newTodo = {
      id: todoList.length + 1, //ID tùy chỉnh
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);

    setTodoList(newTodoList);
  }
  function handlePageChange(newPage) {
    console.log(newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFiltersChange(newFilters) {
    console.log("newFilters", newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="app">
      <h2>React Hooks MagicColorBox</h2>
      <MagicColor />

      {/* {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide Clock</button>
      <button onClick={() => setShowClock(true)}>Show Clock</button>

      <BetterClock /> */}
      {/* <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      <PostFiltersForm onSumit={handleFiltersChange} /> */}
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
    </div>
  );
}
export default App;
