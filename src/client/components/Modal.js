import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';


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
    const imodalClass = cn('imodal animation-appearance', {
      'imodal_open': isOpen,
    });

    return (
      <div className={imodalClass} tabIndex="-1" onKeyDown={this.onEscape} ref={this.modalRef}>
        <div className="imodal__dialog">
          <button type="button" className="imodal__dialog-close" onClick={onClose}>
            <i className="fa fa-times"></i>
          </button>
          <div className="modal__body">
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
