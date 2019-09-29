import React from 'react';
import AvailableTimes from 'react-available-times';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, Form, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';


// deleteEmployee = (name) => {
//   return null;
// }

// addEmployee = (data) => {
//   return null;
// }

// getEmployeeSchedule = () => {
//   return null;
// }



class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      spoofedData: [{ 'start': new Date('September 29, 2019 08:00:00'), 'end': new Date('September 29, 2019 11:00:00') },
      { 'start': new Date('September 29, 2019 11:00:00'), 'end': new Date('September 29, 2019 14:00:00') },
      { 'start': new Date('September 29, 2019 14:00:00'), 'end': new Date('September 29, 2019 17:00:00') },
      { 'start': new Date('September 30, 2019 08:00:00'), 'end': new Date('September 30, 2019 11:00:00') },
      { 'start': new Date('September 30, 2019 11:00:00'), 'end': new Date('September 30, 2019 14:00:00') },
      { 'start': new Date('September 30, 2019 14:00:00'), 'end': new Date('September 30, 2019 17:00:00') },
      { 'start': new Date('October 1, 2019 08:00:00'), 'end': new Date('October 1, 2019 11:00:00') },
      { 'start': new Date('October 1, 2019 11:00:00'), 'end': new Date('October 1, 2019 14:00:00') },
      { 'start': new Date('October 1, 2019 14:00:00'), 'end': new Date('October 1, 2019 17:00:00') },
      { 'start': new Date('October 2, 2019 08:00:00'), 'end': new Date('October 2, 2019 11:00:00') },
      { 'start': new Date('October 2, 2019 11:00:00'), 'end': new Date('October 2, 2019 14:00:00') },
      { 'start': new Date('October 2, 2019 14:00:00'), 'end': new Date('October 2, 2019 17:00:00') },
      { 'start': new Date('October 3, 2019 08:00:00'), 'end': new Date('October 3, 2019 11:00:00') },
      { 'start': new Date('October 3, 2019 11:00:00'), 'end': new Date('October 3, 2019 14:00:00') },
      { 'start': new Date('October 3, 2019 14:00:00'), 'end': new Date('October 3, 2019 17:00:00') },
      { 'start': new Date('October 4, 2019 08:00:00'), 'end': new Date('October 4, 2019 11:00:00') },
      { 'start': new Date('October 4, 2019 11:00:00'), 'end': new Date('October 4, 2019 14:00:00') },
      { 'start': new Date('October 4, 2019 14:00:00'), 'end': new Date('October 4, 2019 17:00:00') },
      { 'start': new Date('October 5, 2019 08:00:00'), 'end': new Date('October 5, 2019 11:00:00') },
      { 'start': new Date('October 5, 2019 11:00:00'), 'end': new Date('October 5, 2019 14:00:00') },
      { 'start': new Date('October 5, 2019 14:00:00'), 'end': new Date('October 5, 2019 17:00:00') },],

      newEmployeeName: '',

      mondayValue: 0,
      tuesdayValue: 0,
      wednesdayValue: 0,
      thursdayValue: 0,
      fridayValue: 0,
      saturdayValue: 0,
      sundayValue: 0,

      removeEmployeeName: '',
    };
  }

  updateCalendar = () => {
    this.setState({
      calendarData: [{ 'start': new Date('September 27, 2019 08:00:00'), 'end': new Date('September 27, 2019 09:00:00') }]
    })
    console.log(this.state)
  }

  setName = (event) => {
    this.setState({newEmployeeName: event.target.value})
  }

  handleToggleChange = (e, day) => {
    console.log(`Setting day: ${day} to value ${e}`)
    switch(day) {
      case 0: this.setState({mondayValue: e}); break;
      case 1: this.setState({tuesdayValue: e}); break;
      case 2: this.setState({wednesdayValue: e}); break;
      case 3: this.setState({thursdayValue: e}); break;
      case 4: this.setState({fridayValue: e}); break;
      case 5: this.setState({saturdayValue: e}); break;
      case 6: this.setState({sundayValue: e}); break;
    }
  }

  getPrefArr = (pref) => {
    switch(pref) {
      case 1: return `[1, 0 ,0]`;
      case 2: return `[0, 1, 0]`;
      case 3: return `[0, 0, 1]`;
      default: return `[0, 0, 0]`;
    }
  }

  postEmployee = () => {
    // Form the payload given the state.
    const payload = {
      name: this.state.newEmployeeName,
      schedule: {
        monday: this.getPrefArr(this.state.mondayValue),
        tuesday: this.getPrefArr(this.state.tuesdayValue),
        wednesday: this.getPrefArr(this.state.wednesdayValue),
        thursday: this.getPrefArr(this.state.thursdayValue),
        friday: this.getPrefArr(this.state.fridayValue),
        saturday: this.getPrefArr(this.state.saturdayValue),
        sunday: this.getPrefArr(this.state.sundayValue),
      }
    }

    // Post
    axios.post(`https://us-central1-friday-254302.cloudfunctions.net/firstFunction/api/employeealgo/`, payload);
  }

  render() {
    return (
      <div>
        <div class="card shadow mb-5 bg-white rounded">
          <div class="card-header pt-3">
            <h2>Employee Scheduling Calendar</h2>
          </div>
          <div class="p-3">
            <AvailableTimes
              weekStartsOn="sunday"
              calendars={[
                {
                  id: 'work',
                  title: 'Work',
                  foregroundColor: '#ff00ff',
                  backgroundColor: '#ffffff',
                  selected: true,
                },
              ]}
              initialSelections={this.state.spoofedData}
              height={600}
              recurring={false}
              availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
              availableHourRange={{ start: 9, end: 22 }}
            />
          </div>
        </div>
        <div class="accordion shadow mb-5 bg-white rounded" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Hire Employee
				        </button>
              </h2>
            </div>
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div class="card-body">
                <div class="row-lg-5">
                  <Form>
                    <fieldset>
                      <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>Full Name</Form.Label>
                        <Col sm={4}>
                          <Form.Control as="input" type="name" value={this.state.newEmployeeName} onChange={this.setName}/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>Monday</Form.Label>
                        <Col sm={10}>
                          <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" onChange={(e) => this.handleToggleChange(e, 0)}>
                              <ToggleButton value={1}>Morning</ToggleButton>
                              <ToggleButton value={2}>Afternoon</ToggleButton>
                              <ToggleButton value={3}>Evening</ToggleButton>
                            </ToggleButtonGroup>
                          </ButtonToolbar>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>Tuesday</Form.Label>
                        <Col sm={10}>
                          <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" onChange={(e) => this.handleToggleChange(e, 1)}>
                              <ToggleButton value={1}>Morning</ToggleButton>
                              <ToggleButton value={2}>Afternoon</ToggleButton>
                              <ToggleButton value={3}>Evening</ToggleButton>
                            </ToggleButtonGroup>
                          </ButtonToolbar>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>Wednesday</Form.Label>
                        <Col sm={10}>
                          <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" onChange={(e) => this.handleToggleChange(e, 2)}>
                              <ToggleButton value={1}>Morning</ToggleButton>
                              <ToggleButton value={2}>Afternoon</ToggleButton>
                              <ToggleButton value={3}>Evening</ToggleButton>
                            </ToggleButtonGroup>
                          </ButtonToolbar>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>Thursday</Form.Label>
                        <Col sm={10}>
                          <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" onChange={(e) => this.handleToggleChange(e, 3)}>
                              <ToggleButton value={1}>Morning</ToggleButton>
                              <ToggleButton value={2}>Afternoon</ToggleButton>
                              <ToggleButton value={3}>Evening</ToggleButton>
                            </ToggleButtonGroup>
                          </ButtonToolbar>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>Friday</Form.Label>
                        <Col sm={10}>
                          <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" onChange={(e) => this.handleToggleChange(e, 4)}>
                              <ToggleButton value={1}>Morning</ToggleButton>
                              <ToggleButton value={2}>Afternoon</ToggleButton>
                              <ToggleButton value={3}>Evening</ToggleButton>
                            </ToggleButtonGroup>
                          </ButtonToolbar>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>Saturday</Form.Label>
                        <Col sm={10}>
                          <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" onChange={(e) => this.handleToggleChange(e, 5)}>
                              <ToggleButton value={1}>Morning</ToggleButton>
                              <ToggleButton value={2}>Afternoon</ToggleButton>
                              <ToggleButton value={3}>Evening</ToggleButton>
                            </ToggleButtonGroup>
                          </ButtonToolbar>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Form.Label as="legend" column sm={2}>Sunday</Form.Label>
                        <Col sm={10}>
                          <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="options" onChange={(e) => this.handleToggleChange(e, 6)}>
                              <ToggleButton value={1}>Morning</ToggleButton>
                              <ToggleButton value={2}>Afternoon</ToggleButton>
                              <ToggleButton value={3}>Evening</ToggleButton>
                            </ToggleButtonGroup>
                          </ButtonToolbar>
                        </Col>
                      </Form.Group>
                    </fieldset>
                    <Form.Group as={Row}>
                      <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={this.postEmployee}>Submit</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Fire Employee
					      </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div class="card-body">
                <Form>
                  <fieldset>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>Full Name</Form.Label>
                      <Col sm={4}>
                        <Form.Control type="name" value={this.state.removeEmployeeName} />
                      </Col>
                    </Form.Group>
                  </fieldset>
                  <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Button type="submit">Submit</Button>
                    </Col>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Business Analytics
					          </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div class="card-body">
                This is where those go
				      </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
