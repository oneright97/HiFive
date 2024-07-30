import { Link, useLocation } from "react-router-dom";

import personIcon from "../../assets/icons/sidebar/personIcon.png";
import pencilIcon from "../../assets/icons/sidebar/pencilIcon.png";
import galleryIcon from "../../assets/icons/sidebar/galleryIcon.png";
import faceIcon from "../../assets/icons/sidebar/faceIcon.png";
import pointIcon from "../../assets/icons/sidebar/pointIcon.png";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="overflow-hidden h-full">
      <div className="mb-[-5000px] pb-[1000px] w-64 h-full bg-white pt-10 absolute left-0 shadow-side-shadow p-2.5">
        <Link
          to="/mypage/reservation"
          className={`flex items-center h-20 pl-10 rounded-2xl ${location.pathname === "/mypage/reservation" ? "bg-gray-200" : ""}`}
        >
          <img src={personIcon} alt="사람아이콘" className="w-4 h-4 mr-3.5" />
          <span className="text-h5">나의 활동</span>
        </Link>
        <Link
          to="/mypage/my-info"
          className={`flex items-center h-20 pl-10 rounded-2xl ${location.pathname === "/mypage/my-info" ? "bg-gray-200" : ""}`}
        >
          <img src={pencilIcon} alt="연필아이콘" className="w-4 h-4 mr-3.5" />
          <span className="text-h5">개인 정보 수정</span>
        </Link>
        <Link
          to="/mypage/gallery"
          className={`flex items-center h-20 pl-10 rounded-2xl ${location.pathname === "/mypage/gallery" ? "bg-gray-200" : ""}`}
        >
          <img src={galleryIcon} alt="사진아이콘" className="w-4 h-4 mr-3.5" />
          <span className="text-h5">추억 갤러리</span>
        </Link>
        <Link
          to="/mypage/idcard"
          className={`flex items-center h-20 pl-10 rounded-2xl ${location.pathname === "/mypage/idcard" ? "bg-gray-200" : ""}`}
        >
          <img src={faceIcon} alt="얼굴아이콘" className="w-4 h-4 mr-3.5" />
          <span className="text-h5">신분증 등록</span>
        </Link>
        <Link
          to="/mypage/point"
          className={`flex items-center h-20 pl-10 rounded-2xl ${location.pathname === "/mypage/point" ? "bg-gray-200" : ""}`}
        >
          <img src={pointIcon} alt="포인트아이콘" className="w-4 하-4 mr-3.5" />
          <span className="text-h5">충전 및 내역 조회</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;