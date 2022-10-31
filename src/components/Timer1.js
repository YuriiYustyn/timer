import "../style.css"
import { Component } from 'react';

class Timer1 extends Component {
   constructor() {
      super()
      this.state = {
         frontTime: "00:0",
         autostart: false,
         begin: 'start',
         pause: false,
         startTime: 5,
         
      }
   }

    onTick () {
      this.setState({ pause: !this.state.pause, begin: 'stop' })
      const countTime = () => {
         if (this.state.time < 1) {
            this.setState({ time: 15, begin: 'start', pause: !this.state.pause, startTime: 15, frontTime: "00:" })
            clearInterval(timess)
         }
         else if (this.state.pause === true && this.state.time > 0) {
            this.setState({ time: this.state.time - 1,})
            if (this.state.time <11) {
               this.setState({ frontTime:'00:0' })
            }
         } else {
            this.setState({ begin: 'start'})
            clearInterval(timess)
         }
      }

      let timess = setInterval(() => countTime(), 1000)
      setInterval(() => {
         if (this.state.pause === false) {
            clearInterval(countTime)
            this.setState({ begin: 'start' })
         }
      }, 1000)
   }
   componentDidMount() {
      this.setState({ time: this.props.time, autostart: this.props.autostart })
   }

   render() {
      return <div>
         <h2>Timer1</h2>
         <h2 >{this.state.frontTime}{this.state.time}&#9786; </h2>
         <button onClick={() => this.onTick()}>
            {this.state.begin}</button>
         <div className='tape' style={{ width: `${this.state.time * (100 / this.state.startTime)}%` }}>
         </div>
      </div>
   }
};

export default Timer1;