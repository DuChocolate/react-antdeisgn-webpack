import React from 'react';
import { Row, Col, Card, message, Modal } from 'antd';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
export default class UploadImags extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            src: '',
            cropResult: null,
            modalVisible: false
        };
        this.cropImage = this.cropImage.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    handleFileChange = e => {
        const file = e.target.files[0];
        if (file) {
            if (file.size <= 90000) {
                this.setState({
                    selectedImageFile: file
                });
            } else {
                message.error('文件过大');
            }
        }
        e.target.value = '';
    }
    onChange(e) {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({ src: reader.result, modalVisible: true });
        };
        reader.readAsDataURL(files[0]);
        e.target.value = '';
    }
    handleCancel = () => {
        this.setState({ modalVisible: false });
    }
    handleOk = () => {
        this.cropImage();
        this.handleCancel();
    }
    cropImage() {
        if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
            return;
        }
        this.setState({
            cropResult: this.cropper.getCroppedCanvas().toDataURL()
        });
    }
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title='点击上传'>
                            <input
                                type="file"
                                accept="image/jpeg,image/jpg,image/png"
                                className="base-upload-input"
                                onChange={this.handleFileChange}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='Cropper'>
                            <div>
                                <div style={{ width: '100%' }}>
                                    <input type="file" onChange={this.onChange} />
                                    <br />
                                    <br />
                                </div>
                                <div className="box" style={{ width: '50%'}}>
                                    {this.state.cropResult ? <img style={{ width: '100%' }} src={this.state.cropResult} alt="cropped image" /> : null }
                                </div>
                                <Modal
                                    width='600px'
                                    visible={this.state.modalVisible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                >
                                    <Cropper
                                        style={{ height: '100%', width: '100%' }}
                                        aspectRatio={3 / 2}
                                        preview=".img-preview"
                                        guides={false}
                                        src={this.state.src}
                                        ref={cropper => { this.cropper = cropper; }}
                                    />
                                </Modal>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}