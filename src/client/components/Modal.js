import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import ss from './Modal.scss.local';


export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    this.modalRef.current.focus();
  }

  onEscape = (e) => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  }

  renderModal() {
    const { isOpen, onClose } = this.props;
    const imodalClass = cn(ss.modal, 'animation-appearance', {
      [ss.modal_open]: isOpen,
    });

    return (
      <div className={imodalClass} tabIndex="-1" onKeyDown={this.onEscape} ref={this.modalRef}>
        <div className={ss.dialog}>
          <button type="button" className={ss.dialogClose} onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
          <div className={ss.body}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(
      this.renderModal(),
      document.querySelector('#modal-root'),
    );
  }
}


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.array,
};
