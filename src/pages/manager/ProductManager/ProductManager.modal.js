import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { editeProduct, postProduct } from "../../../api/JavadShop.api";

const PeoductManagerModal = (props) => {
  const {
    buttonLabel,
    className,
    name,
    groupTitle,
    group,
    discription,
    avatar,
    lenghtOfProducts,
    id
  } = props;

  const [modal, setModal] = useState(false);
  const [state, setState] = useState({
    id:id,
    name: name,
    groupTitle: groupTitle,
    group: group,
    discription: discription,
    avatar: avatar,
    index: lenghtOfProducts,
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
  function groupHandelChange(evt) {
    setState({ ...state, group: evt.target.value });
  }

  function updateProduct(event) {
    const updated ={
      name: state.name,
      group: state.group,
      groupTitle: state.groupTitle,
      discription: state.discription,
    }
    setModal(!modal);
    editeProduct(state.id , updated)
  }
  function addProduct(event) {
    console.log(state);

    const product = {
      id: state.index + 1,
      name: state.name,
      group: state.group,
      groupTitle: state.groupTitle,
      price: "",
      inventory: "",
      date: "",
      discription: state.discription,
      avatar: "",
    };
    postProduct(product);
    setModal(!modal);
  }
  return (
    <>
      <span type="button" onClick={toggle}>
        {buttonLabel}
      </span>
      <Modal isOpen={modal} toggle={toggle} className={className} dir="rtl">
        <ModalHeader toggle={toggle}>
          {avatar ? <> ویرایش کالا </> : <> افزدون کالا</>}
        </ModalHeader>
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
          <Form dir="rtl" onSubmit={avatar ? updateProduct : addProduct}>
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
            <FormGroup className="pb-3">
              <Label for="groupLabel">گروه کالایی :</Label>
              <Input
                type="text"
                name="select"
                id="groupLabel"
                value={state.group}
                onChange={groupHandelChange}
              ></Input>
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
            <div className="d-flex justify-content-center m-4">
              <a href="http://localhost:3000/panel-product">
                <Button
                  type="submit"
                  className="ps-5 pe-5"
                  color="success"
                  
                >
                  {avatar ? <> ویرایش </> : <> افزدون </>}
                </Button>
              </a>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default PeoductManagerModal;
