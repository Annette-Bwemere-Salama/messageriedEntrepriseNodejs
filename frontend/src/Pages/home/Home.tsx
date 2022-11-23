import Login from "../login/Login";
import "./home.css"
import logo from "/home/anette-bwemere/NodeProje/strimingmsgMONGODB/frontend/src/assets/aanyA.png"

export default function Home() {
  return (
    <>

      <div className="text-center">
        <header className="bg-purple-darker m-3 p-3 rounded shadow-lg">
          <img src={logo} alt="AnyChat" className="rounded-lg" />
        </header>
      </div>
      <Login />
    </>

  );
}
