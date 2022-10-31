import "../style.css"
import { Component } from 'react';

class Timer2 extends Component {
   constructor() {
      super()
      this.state = {
         minuts: 59,
         seconds: 60,
         autostart: false,
         begin: 'start',
         pause: false,
         divide: ':'

      }
   }
   componentDidMount() {
      this.setState({ autostart: this.props.autostart })
      this.onTick()
   }

   onTick() {
      this.setState({ pause: !this.state.pause, begin: 'stop' })
      const countTime = () => {
         if (this.state.seconds < 1) {
            this.setState({ minuts: this.state.minuts - 1, seconds: 58, divide: ":" })
         }
         else if (this.state.pause === true && this.state.minuts > 0) {
            this.setState({ seconds: this.state.seconds - 2, })
            if (this.state.seconds < 12) {
               this.setState({ divide: ":0" })
            }
         } else {
            this.setState({ begin: 'start' })
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


   render() {
      return <div>
         <h2>Timer2</h2>
         <h2 >{this.state.minuts}{this.state.divide}{this.state.seconds}&#9786; </h2>
         <button onClick={() => this.onTick()}>
            {this.state.begin}</button>
         <div className='tape' style={{ width: `${(this.state.minuts * 60 + this.state.seconds) / 36}%` }}>
         </div>
      </div>
   }

};

export default Timer2;