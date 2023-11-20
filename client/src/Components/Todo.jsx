import React, { useEffect, useState } from "react";
import {
  Heading,
  Container,
  Flex,
  Spacer,
  Button,
  Card,
  Text,
} from "@chakra-ui/react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { AiOutlinePlus, AiFillCheckSquare } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import UserModal from "./UserModal/UserModal";
import Form from "./Form/Form";
import { useNavigate } from "react-router-dom";
import { changeCheck, dragNotes } from "../actions/todo";

export default function Todo() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [arr, setArr] = useState([]);
  // const [check, setCheck] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("Profile"));

    if (!currentUser) {
      alert("You have to login first");
      navigate("/");
      return;
    }

    setArr(currentUser.notes);
  }, []);

  const handleClick = (e) => {
    setModalOpen(true);
  };
  const handleDelete = async (index) => {
    const newarr = arr.filter((item, i) => i !== index);
    setArr(newarr);
    await dragNotes(newarr);
  };

  const handleChange = async (index) => {
    const newarr = arr.filter((item, i) => {
      if (i === index) {
        item.check = !item.check;
      }
      return item;
    });
    setArr(newarr);
    await changeCheck(index);
  };

  const handleDragEnd = async (results) => {
    if (!results.destination) return;
    const newarr = [...arr];
    const [noteSelected] = newarr.splice(results.source.index, 1);
    newarr.splice(results.destination.index, 0, noteSelected);
    setArr(newarr);
    await dragNotes(newarr);
  };

  return (
    <DragDropContext
      onDragEnd={(result) => {
        handleDragEnd(result);
      }}
    >
      <Container
        mt="3em"
        maxW="50%"
        bg="#F0F0F0"
        py="2em"
        borderRadius="20px"
        boxShadow="lg"
      >
        <Flex mb="3em">
          <Heading size="xl" gap="2">
            ToDo List
          </Heading>
          <Spacer />
          <Button
            bg="#B7B7B7"
            leftIcon={<AiOutlinePlus />}
            onClick={handleClick}
          >
            Add Todo
          </Button>
        </Flex>
        <UserModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <Form arr={arr} setarr={setArr} setModal={setModalOpen} />
        </UserModal>
        <Droppable droppableId="todo">
          {(provided) => (
            <Container
              ref={provided.innerRef}
              {...provided.droppableProps}
              maxW="100%"
            >
              {arr?.map((item, index) => (
                <Draggable
                  draggableId={index.toString() + item.title}
                  key={index}
                  index={index}
                >
                  {(provided) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      maxW="100%"
                      key={index}
                      mb="20px"
                      p="10px"
                    >
                      <Flex gap="2">
                        <Heading fontSize="25px" mb="5px">
                          {item.title}
                        </Heading>
                        <Spacer />
                        <AiFillCheckSquare
                          className="icons"
                          size={32}
                          name="check"
                          onClick={() => handleChange(index)}
                          style={{ color: "#285430" }}
                        />
                        <MdDelete
                          className="icons"
                          size={32}
                          onClick={() => handleDelete(index)}
                          style={{ color: "#D21312" }}
                        />
                      </Flex>
                      <Text
                        fontSize="20px"
                        textDecoration={item.check ? "line-through" : "none"}
                      >
                        {item.des}
                      </Text>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </Container>
    </DragDropContext>
  );
}
