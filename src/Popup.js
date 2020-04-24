import React ,{ Component }from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

class Popup extends Component {
    constructor (props) {
      super(props);
      this.state = {
        showModal: false,
        animal: null,
        name: null
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    
    render () {
         
        var loc = this.props.location
        
        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
          };

      return (
        <div>
          <img src={this.props.img} onClick={this.handleOpenModal} class="img-fluid kidstipimage icon-size" alt="interview process"/>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
             style={customStyles}
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
            <p>1223</p>
          </ReactModal>
        </div>
      );
    }
  }

  export default Popup
  