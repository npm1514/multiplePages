import styled from 'styled-components';

export const BlurbCitation = styled.div`
    width: 100%;
    text-align: right;
    max-width: 600px;
    margin: auto;
    & p {
      text-align: left;
      width: max-content;
      margin-right: 0;
    }
`;

export const BreakSection = styled.div`
    display: inline-block;
    width: 100%;
    margin-bottom: 24px;
    & h2 {
        line-height: 1;
        margin: 0;
        padding: 30px 0;
    }
    & h3 {
        font-size: 24px;
    }
    & .break-wrapper {
        width: calc(100% - 20px);
        padding: 10px;
    }
    & .left-break {
        margin: 0;
        padding: 0;
        width: 49%;
        & .break-wrapper {
          @media (min-width: 767px) {
            float: right;
            & .heading {
              text-align: right;
            }
          }
        }
    }
    & .right-break {
        margin: 0;
        padding: 0;
        width: 50%;
        margin-top: 10px;
        & .break-wrapper {
            & h2 {
              text-align: left;
            }
        }
    }
    & .break-mod {
        display: inline-block;
        width: 100%;
    }
    @media (min-width: 767px) {
        display: flex;
        & .break-wrapper {
          padding: 0;
        }
        & .break-mod {
          width: initial;
        }
        & .left-break {
          width: 50%;
          padding: 0 50px 0 10px;
          box-sizing: border-box;
        }
        & .right-break {
          width: 50%;
          margin-top: 0;
          padding: 0 10px 0 50px;
          box-sizing: border-box;
        }

    }
`;

export const BreakMod = styled.div`
    background-color: #F8F8F8;
    & .heading {
      line-height: 1;
    }
    & .break-wrapper {
      background-color: #F8F8F8;
      max-width: 500px;
      @media (max-width: 767px){
        float: none;
        margin: auto;
      }
    }
    & .break-mod {
        padding: 0;
        text-align: center;
    }
    & iframe {
        display: inline-block;
        max-width: 100%;
        margin: 24px 0;
        width: 100%;
        min-height: 315px;
        max-height: 400px;
        height: 60%;
    }
`;

export const BreakModBlurb = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 0 0 30px;
    text-align: left;
    & p {
        display: inline-block;
        font-size: 14px;
        padding: 0 0 0 20px;
        width: 80%;
        margin: 0;
        font-weight: 300;
        font-family: Helvetica;
        line-height: 1.2;
        color: #545658;
        & .articleLink {
          padding: 0;
          color: #0172A0;
          text-decoration: underline;
          font-size: 16px;
        }
        & a:hover {
          color: #2a6496;
        }
    }
    & a {
        color: #545658;
        display: inline-block;
        padding: 10px 0 0;
    }
    & img {
        display: inline-block;
        vertical-align: top;
        width: 20%;
    }
`;

export const DonationBlurb = styled.div`
    margin: 0 auto;
    max-width: 100%;
    text-align: center;
    width: 100%;
    & h3 {
        text-align: center;
        margin: 0;
        font-weight: 300;
        padding: 0 0 45px;
        color: #545658;
    }
    & p {
        font-size: 16px;
        color: #545658;
        font-weight: 300;
        line-height: 1.2;
        padding: 0 0 15px;
        margin: 0;
        & a {
          color: #0172A0;
        }
        & a:hover {
          color: #2a6496;
        }
    }
    & .button-wrapper {
        text-align: center;
        width: 100%;
    }
    & .submit-button {
        background-color: #0485CC;
        border-radius: 3px;
        color: #fff;
        display: inline-block;
        padding: 10px 12px;
        text-decoration: none;
    }
    @media (min-width: 767px) {
        text-align: left;
        width: 350px;
        margin: 0;
        & .heading {
          text-align: left;
        }
        & h3 {
          text-align: left;
        }
    }
`;

export const SupportSection = styled.div`
    margin-bottom: 24px;
    & h2 {
        line-height: 1;
        padding: 0 0 10px;
    }

    & p {
        font-size: 16px;
        line-height: 1.4;
        text-align: center;
        color: #545658;
        font-weight: 300;
        padding: 0 0 15px;
        margin: 0;
    }
`;

export const ModalWrapper = styled.div`

    & .background {
      position: absolute;
      top: 0;
      left: 0;
      background: #0000008c;
      height: 100vh;
      width: 100vw;
    }
    & .modal-header {
      background: #F9FAFB;
      padding: 10px;
      & span {
          font-size: 14px;
      }
    }
    & .modal-content {
      max-width: 100%;
      margin: auto;
      top: 0;
      width: 800px;
      box-sizing: border-box;
    }
    & .has-error .cl-checkbox-wrapper .cl-checkbox-label:before {
        border-color: #D80021;
    }
    & .donation-form {
      & .row {
          display: flex;
          flex-basis: 0;
          flex-grow: 1;
          padding: 6px 0;
      }

      & .form-field {
          display: flex;
          width: 100%;
      }

      & .os-textarea-control,
      & .os-input-control {
          align-self: flex-end;
          padding: 0 10px;
          width: 100%;
          position: relative;
          text-align: left;
      }

      & .os-textarea {
          width: 100%;
      }

      & .os-checkbox {
          display: flex;
          & label,
          & input {
              padding: 0 10px 0 0;
          }
      }

      & .os-button {
          border-top: 1px solid #CED1D5;
          padding: 15px 10px 0 10px;
          text-align: right;
      }

      & label,
      & input {
          font-size: 12px;
          text-align: left;
      }

      & input[type="file"] {
          border: 1px solid #CED1D5;
          padding: 7px 12px;
      }
    }
    & .modal-header {
        background: #f9fafb;
        padding: 10px!important
    }

    & .modal-header span {
        font-size: 14px
    }

    & .modal-content {
        max-width: 100%;
        top: 0;
        width: 800px
    }

    & .has-error .cl-checkbox-wrapper .cl-checkbox-label:before {
        border-color: #d80021
    }

    & .donation-form .row {
        display: flex;
        flex-basis: 0;
        flex-grow: 1;
        padding: 6px 0
    }

    & .donation-form .form-field {
        display: flex;
        width: 100%
    }

    & .donation-form .os-input-control,
    & .donation-form .os-textarea-control {
        align-self: flex-end;
        padding: 0 10px;
        width: 100%
    }

    & .donation-form .os-textarea {
        width: 100%
    }

    & .donation-form .os-checkbox {
        display: flex
    }

    & .donation-form .os-checkbox input,
    & .donation-form .os-checkbox label {
        padding: 0 10px 0 0
    }

    & .donation-form .os-button {
        border-top: 1px solid #ced1d5;
        padding: 15px 10px 0;
        text-align: right
    }

    & .donation-form input,
    & .donation-form label {
        font-size: 12px!important
    }

    & .donation-form input[type=file] {
        border: 1px solid #ced1d5;
        padding: 7px 12px
    }

    /* body.modal-open {
        overflow: hidden!important
    } */

    & .os-cl-modal-wrapper {
        align-items: center;
        background: rgba(0,0,0,.55);
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        overflow: auto;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999
    }

    & .os-cl-modal-wrapper .backdrop {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1
    }

    & .os-cl-modal-wrapper .os-cl-modal {
        background: #fff;
        border: 1px solid #c2c5ca;
        -webkit-box-shadow: 0 2px 4px 0 #7e7e7e;
        box-shadow: 0 2px 4px 0 #7e7e7e;
        font-size: 18px;
        line-height: 1.33;
        width: 90%
    }

    & .os-cl-modal-wrapper .os-cl-modal.xs {
        max-width: 400px
    }

    & .os-cl-modal-wrapper .os-cl-modal.sm {
        max-width: 480px
    }

    & .os-cl-modal-wrapper .os-cl-modal.md {
        max-width: 720px
    }

    & .os-cl-modal-wrapper .os-cl-modal.lg {
        max-width: 960px
    }

    & .os-cl-modal-wrapper .os-cl-modal.xl {
        max-width: 1200px
    }

    & .os-cl-modal-wrapper .os-cl-modal.xxl {
        max-width: 99%
    }

    & .os-cl-modal-wrapper .modal-header {
        align-items: center;
        display: -webkit-flex;
        -webkit-justify-content: space-between;
        display: flex;
        justify-content: space-between;
        font-family: HelveticaNeue,Sans-Serif;
        font-size: 20px;
        font-weight: 700;
        padding: .8125em 1.125em;
        border-bottom: 1px solid #d8d8d8
    }

    & .os-cl-modal-wrapper .modal-x {
        cursor: pointer;
        height: 25px;
        font-size: 22px;
        margin-right: 15px
    }

    & .os-cl-modal-wrapper .modal-content {
        padding: 20px
    }

    & .os-cl-modal-wrapper .modal-footer {
        padding: 0 1em 1.625em
    }

    @media screen and (max-width: 1100px) {
        & .os-cl-modal-wrapper .os-cl-modal.md {
            width:72%
        }
    }

    @media screen and (max-width: 768px) {
        & .os-cl-modal-wrapper {
            background:#fff
        }

        & .os-cl-modal-wrapper .backdrop {
            display: none
        }

        & .os-cl-modal-wrapper .os-cl-modal {
            box-shadow: none;
            border: none;
            text-align: left;
            width: 90%
        }

        & .os-cl-modal-wrapper .modal-header {
            font-size: 24px;
            padding: 0;
            border-bottom: none
        }
    }

    @media screen and (max-width: 481px) {
        & .os-cl-modal-wrapper .os-cl-modal {
            -ms-flex-item-align:start;
            align-self: start;
            text-align: left;
            width: 100%!important
        }

        & .os-cl-modal-wrapper .os-cl-modal.long {
            margin-top: 0!important
        }

        & .os-cl-modal-wrapper .modal-header {
            display: flex;
            font-size: 20px;
            padding: .8125em 1.125em;
            border-bottom: 1px solid #d8d8d8
        }

        & .os-cl-modal-wrapper .modal-x {
            position: inherit!important
        }

        & .os-cl-modal-wrapper .modal-content {
            padding: 19px 15px 27px
        }

        & .os-cl-modal-wrapper .modal-footer {
            padding: 0 15px;
            margin-bottom: 25px
        }
    }

    & .os-textarea-control label {
        display: block;
        font-size: 14px;
        margin-bottom: 5px
    }

    & .os-textarea-control .os-textarea-align {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%
    }

    & .os-textarea-control .textarea-error {
        color: #d80021;
        font-size: 12px;
        display: none;
        text-align:left;
        position: absolute;
        bottom: -18px;
        right: 10px;
    }

    & .os-textarea-control.has-error .textarea-error {
        display: block
    }

    & .os-textarea-control.has-error .os-textarea {
        border: 1px solid #d80021
    }

    & .os-textarea-control.has-warning .textarea-error {
        display: block;
        color: #8a6d3b
    }

    & .os-textarea-control.has-warning .os-textarea {
        border: 1px solid #8a6d3b
    }

    & .os-textarea-control.has-success .textarea-error {
        display: block;
        color: #196e3d
    }

    & .os-textarea-control.has-success .os-textarea {
        border: 1px solid #196e3d
    }

    & .os-textarea {
        font-family: Helvetica Neue,Helvetica,Arial;
        font-size: 14px;
        color: #545658;
        border: 1px solid #dadcdf;
        border-radius: 3px;
        padding: 0 15px
    }

    & .os-textarea.disabled {
        opacity: .5;
        background: transparent;
        cursor: not-allowed
    }

    & .os-textarea:focus {
        border: 1px solid #0485cc;
        outline: none
    }

    & .os-textarea::placeholder {
        opacity: .7;
        color: #545658
    }

    & textarea.os-textarea {
        padding: 8px 5px 8px 15px
    }

    & .os-input-control label {
        display: block;
        font-size: 14px;
        margin-bottom: 5px
    }

    & .os-input-control .os-input-align {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%
    }

    & .os-input-control .input-error {
        color: #d80021;
        font-size: 12px;
        display: none;
        text-align: left;
        position: absolute;
        bottom: -18px;
        right: 10px;
    }

    & .os-input-control.has-error .input-error {
        display: block
    }

    & .os-input-control.has-error .os-input {
        border: 1px solid #d80021
    }

    & .os-input-control.has-warning .input-error {
        display: block;
        color: #8a6d3b
    }

    & .os-input-control.has-warning .os-input {
        border: 1px solid #8a6d3b
    }

    & .os-input-control.has-success .input-error {
        display: block;
        color: #196e3d
    }

    & .os-input-control.has-success .os-input {
        border: 1px solid #196e3d
    }

    & .os-input {
        font-family: Helvetica Neue,Helvetica,Arial;
        font-size: 14px;
        height: 34px;
        color: #545658;
        border: 1px solid #dadcdf;
        border-radius: 3px;
        padding: 0 15px;
        width: 100%
    }

    & .os-input.input-lg {
        height: 44px;
        font-size: 16px
    }

    & .os-input.input-sm {
        height: 30px;
        font-size: 12px
    }

    & .os-input.attached {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    & .os-input.disabled {
        opacity: .5;
        background: transparent;
        cursor: not-allowed
    }

    & .os-input:focus {
        border: 1px solid #0485cc;
        outline: none
    }

    & .os-input::placeholder {
        opacity: .7;
        color: #545658
    }

    & .os-input-attach button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0
    }

    & .os-dropdown {
        background-color: #fff;
        border-radius: 3px;
        border: 1px solid #dadcdf;
        box-shadow: 0 2px 2px 0 rgba(84,86,88,.06);
        color: #545658;
        cursor: pointer;
        display: block;
        font-family: Helvetica Neue,Helvetica,Arial;
        font-size: 14px;
        line-height: 1em;
        min-height: 36px;
        min-width: 0;
        padding: 0;
        position: relative;
        text-align: left;
        transition: box-shadow .1s ease,width .1s ease;
        -webkit-transition: box-shadow .1s ease,width .1s ease;
        white-space: normal;
        width: 100%;
        word-wrap: break-word
    }

    & .os-dropdown:focus {
        border-color: #ced1d5;
        color: #545658;
        z-index: 9999
    }

    & .os-dropdown.dropdown-lg {
        min-height: 42px;
        font-size: 16px
    }

    & .os-dropdown.dropdown-sm {
        font-size: 12px;
        min-height: 28px
    }

    & .os-dropdown.visible {
        border-radius: 3px 3px 0 0
    }

    & .os-dropdown.disabled,
    & .os-dropdown .os-dropdown-option-listitem.disabled {
        cursor: not-allowed;
        opacity: .5
    }

    & .os-dropdown .os-dropdown-icon {
        float: right;
        width: 8px
    }

    & .os-dropdown-header {
        align-items: center;
        box-sizing: border-box;
        color: #9b9b9b;
        display: flex;
        justify-content: space-between;
        min-height: inherit;
        padding: 9px 10px 9px 15px
    }

    & .os-dropdown-option-list {
        background: #fff;
        border-radius: 0 0 3px 3px;
        border: inherit;
        border-top: none;
        box-shadow: 0 2px 3px 0 rgba(34,36,38,.15);
        cursor: auto;
        height: 0;
        left: 0;
        right: 0;
        margin: 0 -1px;
        max-height: 200px;
        min-width: 100%;
        opacity: 0;
        overflow-x: hidden;
        overflow-y: auto;
        position: absolute;
        z-index: 9999
    }

    & .visible .os-dropdown-option-list {
        border-radius: 0 0 3px 3px;
        height: auto;
        opacity: 1
    }

    & .visible .os-dropdown-option-list.push-content {
        position: relative
    }

    & .os-dropdown-option-listitem {
        cursor: pointer;
        display: block;
        padding: 9px 10px 9px 15px;
        position: relative;
        font-size: inherit;
        white-space: nowrap;
        word-wrap: normal
    }

    & .os-dropdown-option-listitem:first-child {
        border-top: 1px solid #f5f6f7
    }

    & .os-dropdown-option-listitem.active,.os-dropdown-option-listitem:hover:not(.disabled) {
        background-color: #f5f6f7
    }

    @media (max-width: 543px) {
        & .os-dropdown {
            display:block
        }
    }

    & .cl-input-label-margin:before {
        margin: 0 8px 0 0
    }

    & .cl-checkbox-wrapper {
        display: inline-block
    }

    & .cl-checkbox-wrapper:not(:hover):focus .cl-checkbox-label {
        transition: outline .1s ease;
        outline: 2px solid #0485cc;
        outline-offset: 4px
    }

    & .cl-checkbox-wrapper:focus {
        outline: none
    }

    & .cl-checkbox-wrapper[aria-checked=true] .cl-checkbox-check {
        position: absolute;
        fill: #fff;
        width: 28px;
        height: 28px;
        z-index: 1;
        display: block
    }

    & .cl-checkbox-wrapper .cl-checkbox-check,
    & .cl-checkbox-wrapper .cl-checkbox-input {
        display: none
    }

    & .cl-checkbox-wrapper .cl-checkbox-input:checked+.cl-checkbox-label:after {
        background-color: #0485cc;
        box-sizing: border-box;
        content: "";
        display: inline-block;
        border: 1px solid #0485cc;
        border-radius: 3px;
        height: 24px;
        width: 24px;
        position: absolute;
        top: 0;
        left: 0
    }

    @media screen and (min-width: 768px) {
        & .cl-checkbox-wrapper .cl-checkbox-input:checked+.cl-checkbox-label:after {
            border:4px solid #0485cc;
            height: 16px;
            width: 16px
        }
    }

    & .cl-checkbox-wrapper .cl-checkbox-label {
        display: inline-flex;
        font-size: 16px;
        margin-bottom: 10px;
        position: relative
    }

    & .cl-checkbox-wrapper .cl-checkbox-label:before {
        box-sizing: border-box;
        content: "";
        display: inline-block;
        background-color: #f5f6f7;
        border: 1px solid #ced1d5;
        border-radius: 3px;
        height: 24px;
        width: 24px
    }

    @media screen and (min-width: 768px) {
        & .cl-checkbox-wrapper .cl-checkbox-label {
            font-size:14px
        }

        & .cl-checkbox-wrapper .cl-checkbox-label:before {
            height: 16px;
            width: 16px
        }
    }

    & .os-btn-cl {
        position: relative;
        background-color: #f5f6f7;
        color: #545658;
        cursor: pointer;
        font-family: Helvetica Neue,Helvetica,Arial;
        font-size: 14px;
        font-weight: 400;
        height: 34px;
        border: none;
        border-radius: 3px;
        padding: 0 15px;
        outline: none;
        margin: 0
    }

    & .os-btn-cl.rounded {
        border-radius: 34px
    }

    & .os-btn-cl:focus {
        outline: 2px solid #0485cc;
        outline-offset: 2px
    }

    & .os-btn-cl.btn-cl-xs {
        font-size: 11px;
        height: 22px;
        padding: 0 10px
    }

    & .os-btn-cl.btn-cl-sm {
        font-size: 12px;
        height: 30px;
        padding: 0 15px
    }

    & .os-btn-cl.btn-cl-lg {
        font-size: 16px;
        height: 44px;
        padding: 0 20px
    }

    & .os-btn-cl:hover {
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.2)
    }

    & .os-btn-cl:active {
        border: none;
        box-shadow: inset 0 0 3px 0 rgba(0,0,0,.3)
    }

    & .os-btn-cl.btn-cl-disabled {
        border: 1px solid #ced1d5;
        pointer-events: none;
        cursor: not-allowed;
        opacity: .5
    }

    & .os-btn-cl.btn-cl-primary {
        background-color: #0485cc;
        color: #fff
    }

    & .os-btn-cl.btn-cl-primary:hover {
        background-color: #0272a2;
        box-shadow: none
    }

    & .os-btn-cl.btn-cl-primary:active {
        background-color: #026089
    }

    & .os-btn-cl.btn-cl-secondary {
        background-color: #afb3ba;
        color: #fff;
        border: 1px solid #ced1d5
    }

    & .os-btn-cl.btn-cl-secondary:hover {
        background-color: #dadcdf;
        box-shadow: none
    }

    & .os-btn-cl.btn-cl-secondary.os-btn-cl-icon:active,& .os-btn-cl.btn-cl-secondary:active {
        background-color: #ced1d5
    }

    & .os-btn-cl.btn-cl-secondary-light {
        background-color: #fff;
        color: #545658;
        border: 1px solid #ced1d5
    }

    & .os-btn-cl.btn-cl-danger-light {
        background-color: #fff;
        color: #ac1b25;
        border: 1px solid #ced1d5
    }

    & .os-btn-cl.btn-cl-tertiary {
        background-color: #545658;
        color: #fff
    }

    & .os-btn-cl.btn-cl-tertiary:hover {
        background-color: #626669;
        box-shadow: none
    }

    & .os-btn-cl.btn-cl-tertiary:active {
        background-color: #626669
    }

    & .os-btn-cl.btn-cl-success {
        background-color: #27ae60;
        color: #fff
    }

    & .os-btn-cl.btn-cl-success:hover {
        background-color: #2dca6f;
        box-shadow: none
    }

    & .os-btn-cl.btn-cl-success:active {
        background-color: #219452
    }

    & .os-btn-cl.btn-cl-bordered {
        border: 1px solid #ced1d5
    }
`;
