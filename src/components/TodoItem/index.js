import React, { useState } from "react";
import { Box, Button, Input, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TodoItem = ({ item, onUpdate, onDelete, onCreate }) => {
  const navigate = useNavigate();

  const [modify, setModify] = useState(false);

  const [input, setInput] = useState({
    title: item.title,
    content: item.content,
  });
  const handeModify = (modify) => {
    if (modify) {
      onUpdate({ id: item.id, title, content });
      setModify(!modify);
    } else {
      setModify(!modify);
    }
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const { title, content } = input;
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        component={"a"}
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(`/detail/${item.id}`, { state: item })}
      >
        <span>제목</span>
        <Input
          disabled={!modify}
          name="title"
          value={title}
          onChange={onChange}
        ></Input>
        <span>내용</span>
        <Input
          disabled={!modify}
          fullWidth
          value={content}
          name="content"
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
