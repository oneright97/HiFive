import React, { useState } from "react";
import Content from "./BoardPage.Content";
import CommentList from "./BoardPage.CommentList";
import DeleteModal from "./BoardPage.DeleteModal";

const BoardPage: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("게시글");
  const [isEditing, setEditing] = useState<boolean>(false);

  const handleModal = (stateOfModal: boolean, msg = "게시글"): void => {
    setOpen(stateOfModal);
    setMessage(msg);
  };

  const handleEdit = (editingState: boolean): void => {
    setEditing(editingState);
  };

  return (
    <div className="relative w-full flex flex-col items-center pt-[40px] bg-gray-100">
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" />}
      <div
        className={`w-3/4 flex flex-col items-center bg-board-gradient rounded-3xl ${isOpen ? "relative z-20" : ""}`}
      >
        {isOpen && (
          <div className="absolute inset-0 bg-black opacity-50 z-10 rounded-3xl" />
        )}
        <div className="w-[80%] mt-20 mb-10 relative">
          <Content
            handleModal={handleModal}
            handleEdit={handleEdit}
            isEditing={isEditing}
          />
          <CommentList handleModal={handleModal} />
        </div>
      </div>
      <DeleteModal
        isOpen={isOpen}
        onClose={() => handleModal(false, "게시글")}
        message={message}
      />
    </div>
  );
};

export default BoardPage;