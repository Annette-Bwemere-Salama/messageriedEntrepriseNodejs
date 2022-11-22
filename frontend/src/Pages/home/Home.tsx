import Topbar from "../../Component/topbar/Topbar";
// import Sidebar from "../../Component/sidebar/Sidebar";
// import Feed from "../../Component/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        {/* <Sidebar /> */}
        {/* <Feed username={undefined}/> */}
        {/* <Rightbar/> */}
        <h1>AnnyChat.comme Vous salue</h1>
      </div>
    </>
  );
}
