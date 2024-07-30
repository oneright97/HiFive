import { useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo/logo.png";

function Navbar() {
  const naviate = useNavigate();

  return (
    <div className="z-10 bg-white flex w-screen justify-between items-center h-20 px-10 py-2 shadow-nav-shadow">
      <div>
        <img
          src={logo}
          alt="Logo"
          className="w-[164.72px] h-[44px]"
          onClick={() => naviate("/")}
          onKeyDown={() => naviate("/")}
          role="presentation"
        />
      </div>
      <div className="flex items-center">
        <div className="text-primary-text text-medium m-7">로그인</div>
        <div className="btn-lg">회원가입</div>
      </div>
      {/* <div className="flex items-center">
        <div className="text-primary-text text-medium m-7">마이페이지</div>
        <div className="btn-light-lg">로그아웃</div>
      </div> */}
    </div>
  );
}

export default Navbar;