import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap';

const PeoductManagerModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  
  return (
    <>
      <Link className='text-decoration-none bg-success text-light p-3 rounded'  onClick={toggle}>{buttonLabel}</Link>
      <Modal isOpen={modal} toggle={toggle} className={className} dir='rtl'>
        <ModalHeader toggle={toggle}>افزودن / ویرایش کالا</ModalHeader>
        <ModalBody>
          <Form dir='rtl'>
            <FormGroup className='pb-3'>
                <Label for="uploadImg">تصویر کالا :</Label>
                <Input className='d-flex w-100  border rounded' type="file" id="uploadImg" name="customFile" />
            </FormGroup>
            <FormGroup className='pb-3'>
                <Label for="nameProduct">نام کالا :</Label><br/>
                <Input type="text" name="nameProduct" id="nameProduct" />
            </FormGroup>
            <FormGroup className='pb-3'>
                <Label for="groupLabel">دسته بندی :</Label>
                <Input type="select" name="select" id="groupLabel">
                    <option> گروه مورد نظر خود را انتخاب کنید</option>
                    <option>مواد غذایی</option>
                    <option>آرایشی و بهداشتی</option>
                    <option>ابزار و ملزومات</option>
                    <option>خوار و بار</option>
                    <option>نوشیدنی</option>
                </Input>
            </FormGroup>
            <FormGroup>
              <Label for="description">توضیحات :</Label>
              <Input type="textarea" name="text" id="description" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className='d-flex justify-content-center'>
            <Button className='ps-5 pe-5' color="success" onClick={toggle}> ذخیره </Button>{' '}
        </ModalFooter>
      </Modal>
    </>
  );
}

export default PeoductManagerModal;