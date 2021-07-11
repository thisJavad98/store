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
    id,
  } = props;

  const [modal, setModal] = useState(false);
  const [state, setState] = useState({
    id: id,
    name: name,
    groupTitle: groupTitle,
    group: group,
    discription: discription,
    avatar: { props: avatar, newUlr: "" },
    uploadImage: "",
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
  async function avatarHandelChange(evt) {
    setState({
      ...state,
      avatar: { ...state.avatar, props: evt.target.files[0] },
    });
  }

  async function updateProduct() {
    /* const fd = new FormData();
    fd.append("image", state.avatar.props, state.avatar.props.name);
    const filename = await uploadImage(fd).filename;
    setState({uploadImage:filename}) */
    await editeProduct(state.id, {
      name: state.name,
      group: state.group,
      groupTitle: state.groupTitle,
      discription: state.discription,
      /* avatar: "http://localhost:5000/files/" +  state.uploadImage, */
    });
    setModal(!modal);
  }

  async function addProduct() {
    /* const fd = new FormData();
    fd.append("image", state.avatar.props, state.avatar.props.name);
    const filename = await uploadImage(fd).filename;
    setState({uploadImage:filename}) */
    await postProduct({
      id: state.index + 1,
      name: state.name,
      group: state.group,
      groupTitle: state.groupTitle,
      price: "",
      inventory: "",
      date: "",
      discription: state.discription,
      /* avatar: "http://localhost:5000/files/" + state.uploadImage, */
    });
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
                src={state.avatar.props}
              />
            </div>
          ) : (
            ""
          )}
          <Form dir="rtl" onSubmit={avatar ? updateProduct : addProduct}>
            <FormGroup className="pb-3">
              <Label for="image">تصویر کالا :</Label>
              <Input
                className="d-flex w-100  border rounded"
                type="file"
                id="image"
                name="customFile"
                accept="image/*"
                onChange={avatarHandelChange}
              />
            </FormGroup>
            <FormGroup className="pb-3">
              <Label for="name">نام کالا :</Label>
              <br />
              <Input
                type="text"
                name="name"
                id="name"
                value={state.name}
                onChange={nameHandelChange}
              />
            </FormGroup>
            <FormGroup className="pb-3">
              <Label for="groupTitle">دسته بندی :</Label>
              <Input
                type="select"
                name="groupTitle"
                id="groupTitle"
                value={state.groupTitle}
                onChange={groupTitleHandelChange}
              >
                <option> گروه مورد نظر خود را انتخاب کنید</option>
                <option>لبنیات</option>
                <option>کالاهای اساسی وخاروبار</option>
              </Input>
            </FormGroup>
            <FormGroup className="pb-3">
              <Label for="group">گروه کالایی :</Label>
              <Input
                type="text"
                name="group"
                id="group"
                value={state.group}
                onChange={groupHandelChange}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">توضیحات :</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={state.discription}
                onChange={discriptionHandelChange}
              />
            </FormGroup>
            <div className="d-flex justify-content-center m-4">
              <a href="http://localhost:3000/panel-product">
                <Button type="submit" className="ps-5 pe-5" color="success">
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
