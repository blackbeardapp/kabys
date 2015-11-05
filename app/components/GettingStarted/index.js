import React from 'react'
import Modal from '../Modal'
import styles from './style.scss'
import Button from '../Button'
import { execSync } from 'child_process'
import ProfileActions from '../../actions/ProfileActions'

export default class GettingStarted extends React.Component {
  constructor() {
    super()
    this.state = {
      show: true,
      docker: null,
      dockerMachine: null
    }
  }
  onClickImGood() {
    this.setState({
      show: false
    })
  }
  detectDocker() {
    try {
      var output = execSync('docker --version ').toString()
      this.setState({
        docker: true
      })
    } catch (e) {
      console.log(e)
      this.setState({
        docker: false
      })
    }
  }
  detectDockerMachine() {
      try {
        var output = execSync('docker-machine env default').toString()
        this.setState({
          dockerMachine: true
        })
      } catch (e) {
        console.log(e)
        this.setState({
          dockerMachine: false
        })
      }
  }
  componentDidMount() {
    this.detectDocker()
    this.detectDockerMachine()
  }
  getDockerStatus() {
    if(this.state.docker === true) {
      return 'YES'
    } else {
      return 'NO'
    }
  }
  getDockerMachineStatus() {
    if(this.state.dockerMachine === true) {
      return 'YES'
    } else {
      return 'NO'
    }
  }
  onClickImGood() {
    ProfileActions.hideGetStarted()
  }
  render() {
    return (
      <div>
        <Modal show={this.state.show}>
          <h1 className={styles.Title}>Getting Started</h1>
          <div className={styles.List}>
            <div>There is a few things that needs to be setup and correct.</div>
            <div className={styles.ListItem}>
              <h2>1. Docker Toolbox is installed - {this.getDockerStatus()}</h2>
              <p className={styles.ListDesc}>
                You can download Docker Toolbox at <a href='https://docker.com'>www.docker.com</a>
              </p>
            </div>
            <div className={styles.ListItem}>
              <h2>2. Docker Machine is running - {this.getDockerMachineStatus()}</h2>
              <p className={styles.ListDesc}>
                To do that docker-machine is used.
              </p>
            </div>
          </div>
          <div style={{textAlign: 'center'}}>
            <Button onClick={this.onClickImGood.bind(this)} variant='green-inverse' size='big'>I'm good to go!</Button>
          </div>
        </Modal>
      </div>
    )
  }
}
