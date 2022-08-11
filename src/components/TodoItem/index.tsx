import React, { useState } from "react";
import { Box, Button, Input, Stack } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
interface ITodoItem {
  item?: any;
  onUpdate?: any;
  onDelete?: any;
  onCreate?: any;
}
const TodoItem = ({ item, onUpdate, onDelete, onCreate }: ITodoItem) => {
  const navigate = useNavigate();

  const [modify, setModify] = useState(false);

  const [input, setInput] = useState({
    title: item.title,
    content: item.content,
  });
  const handeModify = (modify: boolean) => {
    if (modify) {
      onUpdate({ id: item.id, title, content });
      setModify(!modify);
    } else {
      setModify(!modify);
    }
  };

  const onChange = (e: { target: { value: any; name: any } }) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const moveDetail = (e: any) => {
    navigate(`/${item.id}`, { state: item });
  };
  const { title, content } = input;
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ cursor: "pointer" }}
        onClick={(e: any) => moveDetail(e)}
      >
        <span>제목</span>
        <Input
          disabled={!modify}
          name="title"
          value={title}
          onClick={(e) => e.stopPropagation()}
          onChange={onChange}
        ></Input>
        <span>내용</span>
        <Input
          disabled={!modify}
          value={content}
          name="content"
          onClick={(e) => e.stopPropagation()}
          onChange={onChange}
        ></Input>
      </Box>
      <Stack direction="row" justifyContent="flex-end">
        <Button onClick={() => handeModify(modify)}>
          {modify ? "완료" : "수정"}
        </Button>
        <Button onClick={() => onDelete({ id: item.id })}>삭제</Button>
      </Stack>
    </Box>
  );
};

export default React.memo(TodoItem);
