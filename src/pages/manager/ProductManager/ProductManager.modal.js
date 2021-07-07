import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const PeoductManagerModal = (props) => {
  const { buttonLabel, className, name, groupTitle, discription, avatar } =
    props;

  const [modal, setModal] = useState(false);
  const [state, setState] = useState({
    name: name,
    groupTitle: groupTitle,
    discription: discription,
    avatar: avatar,
  });

  const toggle = () => setModal(!modal);

  function nameHandelChange(evt) {
    setState({ ...state, name: evt.target.value });
  }
  function groupTitleHandelChange(evt) {
    setState({ ...state, groupTitle: evt.target.value });
  }
  function discriptionHandelChange(evt) {
    setState({ ...state, discription: evt.target.value });
  }
  return (
    <>
      <span type="button" onClick={toggle}>
        {buttonLabel}
      </span>
      <Modal isOpen={modal} toggle={toggle} className={className} dir="rtl">
        <ModalHeader toggle={toggle}>افزودن / ویرایش کالا</ModalHeader>
        <ModalBody>
          {avatar ? (
            <div className="d-flex justify-content-center">
              <img
                alt={state.name}
                className="d-flex rounded-circle"
                width="80px"
                height="80px"
                src={state.avatar}
              />
            </div>
          ) : (
            ""
          )}
          <Form dir="rtl">
            <FormGroup className="pb-3">
              <Label for="uploadImg">تصویر کالا :</Label>
              <Input
                className="d-flex w-100  border rounded"
                type="file"
                id="uploadImg"
                name="customFile"
                accept="image/*"
              />
            </FormGroup>
            <FormGroup className="pb-3">
              <Label for="nameProduct">نام کالا :</Label>
              <br />
              <Input
                type="text"
                name="nameProduct"
                id="nameProduct"
                value={state.name}
                onChange={nameHandelChange}
              />
            </FormGroup>
            <FormGroup className="pb-3">
              <Label for="groupLabel">دسته بندی :</Label>
              <Input
                type="select"
                name="select"
                id="groupLabel"
                value={state.groupTitle}
                onChange={groupTitleHandelChange}
              >
                <option> گروه مورد نظر خود را انتخاب کنید</option>
                <option>لبنیات</option>
                <option>کالاهای اساسی وخاروبار</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">توضیحات :</Label>
              <Input
                type="textarea"
                name="text"
                id="description"
                value={state.discription}
                onChange={discriptionHandelChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center">
          <Button className="ps-5 pe-5" color="success" onClick={toggle}>
            {" "}
            ذخیره{" "}
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default PeoductManagerModal;
