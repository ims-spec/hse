import { Admin, ListGuesser, Resource } from "react-admin";
import { dataProvider } from "./providers/dataProvider";

// import HseList from './pages/hse/hseList'
// import createHSE from "./pages/hse/createHSE";
import PostList from "./pages/posts/PostList";

import "./App.css";


function App() {
  // console.log(dataProvider)
  return (
    <Admin
      dataProvider={dataProvider}
      // authProvider={}
    >
      {/* <Resource
        name="hse"
        list={ListGuesser} /> */}
      <Resource name="posts" list={PostList} />
      {/* <Resource source="divisions" list="divisionsList" />
      <Resource source="employees" list="employeesList" />
      <Resource source="title_jobs" list="titleJobsList" />
      <Resource source="divisions" list="divisionsList" /> */}
    </Admin>
  );
}

export default App;
