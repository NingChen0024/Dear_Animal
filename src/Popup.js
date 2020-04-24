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
        
        

      return (
        <div>
          <img src={this.props.img} onClick={this.handleOpenModal} class="img-fluid kidstipimage icon-size" alt="interview process"/>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
             closeTimeoutMS={500}
             style={{
                overlay: {
                  position: 'fixed',
                  top: 250,
                  left: 250,
                  right: 250,
                  bottom: 250,
                  backgroundColor: 'rgb(230, 255, 242)'
                },
                content: {
            
                  top: '40px',
                  left: '40px',
                  right: '40px',
                  bottom: '40px',
                  border: '1px #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '40px',
                  outline: 'none',
                  padding: '20px',
                  backgroundColor:'rgb(255, 245, 204)'
                  
                }
              }}
          >
            <p>1223</p>
            <button onClick={this.handleCloseModal} className='custom-kid-btn btn-kid-bg btn popupbutton'>Go Back</button>
        
          </ReactModal>
        </div>
      );
    }
  }

  export default Popup
  