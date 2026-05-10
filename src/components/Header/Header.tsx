import { Input } from "../UI";
import "./Header.css";

export function Header() {
  return (
    <header id="header">
      <div>
        <img src="src/assets/logo.png" alt="logo image" width={150} />
      </div>
      <div>
        <Input placeholder="Search" />
      </div>
      <div>action panel</div>
      <div>lang</div>
    </header>
  );
}
