import { Admin, CustomRoutes, ListGuesser, Resource } from "react-admin";
import { dataProvider } from "./providers/dataProvider";
import { Route } from "react-router-dom";

//Pages
// import HseList from './pages/hse/hseList'
// import createHSE from "./pages/hse/createHSE";
import PostList from "./pages/posts/PostList";
import PosterList from "./pages/posts/PosterList";
import CreatePost from "./pages/posts/CreatePost";
import Dashboard from "./pages/dashboard/Dashboard";
import CreatePoster from "./pages/posts/CreatePoster";

//Routes
import Settings from "./routePages/Settings";
import Profile from "./routePages/Profile";

//layouts
import MyLayout from "./MyLayout";

//icons
// import BookIcon from "@material-ui/icons/Book";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import GroupsIcon from '@mui/icons-material/Groups';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';



//styles
import "./App.css";

function App() {
  // console.log(dataProvider)
  return (
    <Admin
      dataProvider={dataProvider}
      dashboard={Dashboard}
      // authProvider={}
      layout={MyLayout}
      
    >
      
      {/* <Resource name="posts" list={PostList} create={CreatePost}/> */}
      <Resource
        name="posts"
        list={PostList}
        create={CreatePost}
        icon={LocalPostOfficeIcon} />
      
      <Resource
        name="posters"
        list={PosterList}
        create={CreatePoster}
        icon={TurnedInNotOutlinedIcon} />  
      
      <Resource
        name="groups"
        list={ListGuesser}
        // create={Create}
        icon={GroupsIcon}
        // edit={}
        // show={ListGuesser}
      />


      <CustomRoutes>
        <Route path="settings" element={<Settings/> } />
        <Route path="profile" element={<Profile/> } />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
