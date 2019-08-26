/* eslint-disable jsx-a11y/aria-role */
import React, { Component } from 'react';
import TextArea from 'overstock-component-library/lib/TextArea';
import Input from 'overstock-component-library/lib/Input';
import Dropdown from 'overstock-component-library/lib/Dropdown';
import Checkbox from 'overstock-component-library/lib/Checkbox';
import Button from 'overstock-component-library/lib/Button';
import axios from 'axios';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formComplete: false,
            request: {
                id: 'request',
                value: '',
                required: true
            },
            firstName: {
                id: 'firstName',
                value: '',
                required: true
            },
            lastName: {
                id: 'lastName',
                value: '',
                required: true
            },
            organization: {
                id: 'organization',
                value: '',
                required: true
            },
            website: {
                id: 'website',
                value: '',
                required: false
            },
            addressLine1: {
                id: 'addressLine1',
                value: '',
                required: true
            },
            addressLine2: {
                id: 'addressLine2',
                value: '',
                required: false
            },
            city: {
                id: 'city',
                value: '',
                required: true
            },
            state: {
                id: 'state',
                value: '',
                required: true
            },
            zipCode: {
                id: 'zipCode',
                value: '',
                required: true
            },
            country: {
                id: 'country',
                value: '',
                required: true
            },
            smail: {
                id: 'smail',
                value: '',
                required: true
            },
            smailConfirm: {
                id: 'smailConfirm',
                value: '',
                required: true
            },
            nonProfitId: {
                id: 'nonProfitId',
                value: '',
                required: false
            },
            event: {
                id: 'event',
                value: '',
                required: false
            },
            eventDate: {
                id: 'eventDate',
                value: '',
                required: false
            },
            pastContributions: {
                id: 'pastContributions',
                value: '',
                required: false
            },
            fileUpload: {
                id: 'fileUpload',
                value: '',
                required: false
            },
            readAndAgree: {
                id: 'readAndAgree',
                value: false,
                required: true
            }
        };

        this.submitForm = this.submitForm.bind(this);
        this.valueChange = this.valueChange.bind(this);
        this.uploadChange = this.uploadChange.bind(this);
    }

    submitForm(event) {
        event.preventDefault();
        const { state } = this;
        const objKeys = Object.keys(state);
        const l = objKeys.length;
        const validCount = 12;
        let fieldCount = 0;
        for (let i = 0; i < l; i += 1) {
            const key = state[objKeys[i]];
            const elem = document.getElementById(`${objKeys[i]}-field`);

            if (key.required) {
                if (!key.value || key.value.length === 0) {
                    elem.firstChild.classList.add('has-error');
                } else {
                    elem.firstChild.classList.remove('has-error');
                    fieldCount += 1;
                }

                if (key.id === 'smailConfirm') {
                    if (key.value !== state.smail.value) {
                        elem.firstChild.classList.add('has-error');
                        fieldCount -= 1;
                    } else {
                        elem.firstChild.classList.remove('has-error');
                    }
                }
            }
        }
        if (fieldCount === validCount) {
            const req = new XMLHttpRequest(); // eslint-disable-line
            var content = objKeys.map((item) => {
              if(state[item].id){
                var val = state[item].id == "pastContributions" ? state[item].value.text : state[item].value;
                return (`
                  <h5 style='color:#5e5e5e;margin:10px 0;'>${state[item].id}:</h5>
                  <h3 style='color:#5e5e5e;margin:5px 0;'>${val}</h3>
                `)

              }
            }).join('');

            axios.post('/overstock-cares/emailer', {
              smail: state.smail.value,
              content: content,
              firstName: state.firstName.value
            }).then(function (response) {
              console.log("email successfully sent");
            }).catch(function (error) {
              console.log(error);
            });

            this.setState({
                formComplete: true
            });
        }
    }

    valueChange(event, dropDownField) {
        const change = {};
        if (event.target) {
            const target = event.target;
            change[target.name] = this.state[target.name];
            change[target.name].value = target.type === 'checkbox' ? !this.state[target.name].value : target.value;
        } else {
            const target = event;
            change[dropDownField] = this.state[dropDownField];
            change[dropDownField].value = target;
        }
        this.setState(change);
    }
    uploadChange(event) {
      const fileUpload = document.getElementById('file-upload');
      const fileUploadValue = fileUpload && fileUpload.value ? fileUpload.value : "";
      this.setState({
        fileUpload: {
            id: 'fileUpload',
            value: fileUploadValue,
            required: false
        }
      })
    }
    componentDidMount(){
      document.getElementById('fileUpload-field').addEventListener('DOMSubtreeModified', this.uploadChange)
    }
    render() {
        const data = this.state;
        const whichView = this.state.formComplete ? (
            <div className="form-complete">
                <p><strong>You have successfully submitted your donation request with Overstock Cares! Our team looks forward to reading and reviewing your submission and will respond within 2 weeks.</strong></p>
                <p>Thank you!</p>
            </div>
        ) : (
            <form>
                <div className="row">
                    <div id={`${data.request.id}-field`} className="form-field">
                        <TextArea
                            labelText="Tell us about your request:*"
                            errorMessage="Required"
                            name={data.request.id}
                            onChange={this.valueChange}
                            value={data.request.value}
                        />
                    </div>
                </div>
                <div className="row">
                    <div id={`${data.firstName.id}-field`} className="form-field">
                        <Input
                            labelText="First Name *"
                            errorMessage="Required"
                            size="sm"
                            name={data.firstName.id}
                            onChange={this.valueChange}
                            value={data.firstName.value}
                        />
                    </div>
                    <div id={`${data.lastName.id}-field`} className="form-field">
                        <Input
                            labelText="Last Name *"
                            errorMessage="Required"
                            size="sm"
                            name={data.lastName.id}
                            onChange={this.valueChange}
                            value={data.lastName.value}
                        />
                    </div>
                </div>
                <div className="row">
                    <div id={`${data.organization.id}-field`} className="form-field">
                        <Input
                            labelText="Name of Organization *"
                            errorMessage="Required"
                            size="sm"
                            name={data.organization.id}
                            onChange={this.valueChange}
                            value={data.organization.value}
                        />
                    </div>
                    <div id={`${data.website.id}-field`} className="form-field">
                        <Input
                            labelText="Website (if applicable)"
                            errorMessage="Required"
                            size="sm"
                            name={data.website.id}
                            onChange={this.valueChange}
                            value={data.website.value}
                        />
                    </div>
                </div>
                <div className="row">
                    <div id={`${data.addressLine1.id}-field`} className="form-field">
                        <Input
                            labelText="Address Line 1 *"
                            errorMessage="Required"
                            size="sm"
                            name={data.addressLine1.id}
                            onChange={this.valueChange}
                            value={data.addressLine1.value}
                        />
                    </div>
                </div>
                <div className="row">
                    <div id={`${data.addressLine2.id}-field`} className="form-field">
                        <Input
                            labelText="Address Line 2"
                            errorMessage="Required"
                            size="sm"
                            name={data.addressLine2.id}
                            onChange={this.valueChange}
                            value={data.addressLine2.value}
                        />
                    </div>
                </div>
                <div className="row">
                    <div id={`${data.city.id}-field`} className="form-field">
                        <Input
                            labelText="City *"
                            errorMessage="Required"
                            size="sm"
                            name={data.city.id}
                            onChange={this.valueChange}
                            value={data.city.value}
                        />
                    </div>
                    <div id={`${data.state.id}-field`} className="form-field">
                        <Input
                            labelText="State *"
                            errorMessage="Required"
                            size="sm"
                            name={data.state.id}
                            onChange={this.valueChange}
                            value={data.state.value}
                        />
                    </div>
                    <div id={`${data.zipCode.id}-field`} className="form-field">
                        <Input
                            labelText="Zip Code *"
                            errorMessage="Required"
                            size="sm"
                            name={data.zipCode.id}
                            onChange={this.valueChange}
                            value={data.zipCode.value}
                        />
                    </div>
                    <div id={`${data.country.id}-field`} className="form-field">
                        <Input
                            labelText="Country *"
                            errorMessage="Required"
                            size="sm"
                            name={data.country.id}
                            onChange={this.valueChange}
                            value={data.country.value}
                        />
                    </div>
                </div>
                <div className="row">
                    <div id={`${data.smail.id}-field`} className="form-field">
                        <Input
                            labelText="Email *"
                            errorMessage="Required"
                            size="sm"
                            name={data.smail.id}
                            onChange={this.valueChange}
                            value={data.smail.value}
                        />
                    </div>
                    <div id={`${data.smailConfirm.id}-field`} className="form-field">
                        <Input
                            labelText="Confirm Email *"
                            errorMessage="Email required - Email must match"
                            size="sm"
                            name={data.smailConfirm.id}
                            onChange={this.valueChange}
                            value={data.smailConfirm.value}
                        />
                    </div>
                </div>
                <div className="row">
                    <div id={`${data.nonProfitId.id}-field`} className="form-field">
                        <Input
                            labelText="Non-profit ID#"
                            errorMessage="Required"
                            size="sm"
                            name={data.nonProfitId.id}
                            onChange={this.valueChange}
                            value={data.nonProfitId.value}
                        />
                    </div>
                    <div id={`${data.event.id}-field`} className="form-field">
                        <Input
                            labelText="Event (if applicable)"
                            errorMessage="Required"
                            size="sm"
                            name={data.event.id}
                            onChange={this.valueChange}
                            value={data.event.value}
                        />
                    </div>
                    <div id={`${data.eventDate.id}-field`} className="form-field">
                        <Input
                            labelText="Date of Event (if applicable)"
                            errorMessage="Required"
                            size="sm"
                            name={data.eventDate.id}
                            onChange={this.valueChange}
                            value={data.eventDate.value}
                        />
                    </div>
                    <div id={`${data.pastContributions.id}-field`} className="form-field">
                        <div className="os-input-control">
                            <label htmlFor="Select an Option">Have we contributed to your organization in the past?</label>
                            <Dropdown
                                labelText={this.state.pastContributions.value.text ? this.state.pastContributions.value.text : 'Select an Option'}
                                optionList={[
                                    { value: 'yes', text: 'yes' },
                                    { value: 'no', text: 'no' }
                                ]}
                                size="sm"
                                name={data.pastContributions.id}
                                onChange={e => this.valueChange(e, data.pastContributions.id)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id={`${data.fileUpload.id}-field`} className="form-field">
                        <div className="os-input-control">
                            <label htmlFor="File Upload">Additional Documents</label>
                            <Input
                              id="file-upload"
                              name={data.fileUpload.id}
                              value={data.fileUpload.value}
                              type="hidden"
                              role="uploadcare-uploader"
                              data-multiple="true"
                              data-public-key="eed438052ba6d1fc004b"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id={`${data.readAndAgree.id}-field`} className="form-field">
                        <div className="os-input-control os-checkbox">
                            <Checkbox
                                errorMessage="Required"
                                size="sm"
                                name={data.readAndAgree.id}
                                onChange={this.valueChange}
                                checked={data.readAndAgree.value}
                                id={data.readAndAgree.id}
                                htmlFor={data.readAndAgree.id}
                                value="1"
                            />
                            <label htmlFor="Read and Agree">I have read and agree to the <a href="https://www.overstock.com/98493/static.html" target="_blank" rel="noopener noreferrer">donation policy</a>*</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="os-input-control os-button">
                        <Button type="submit" btnType="primary" onClick={this.submitForm}>Submit</Button>
                    </div>
                </div>
            </form>
        );

        return (
            <div className="donation-form">
                {whichView}
            </div>
        );
    }
}
