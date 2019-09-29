import React from 'react';
import AvailableTimes from 'react-available-times';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      spoofedData: [{ 'start': new Date('September 29, 2019 08:00:00'), 'end': new Date('September 29, 2019 11:00:00'), calendarId: 'Work' },
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
      { 'start': new Date('October 5, 2019 14:00:00'), 'end': new Date('October 5, 2019 17:00:00') },]
    };

    this.updateCalendar = this.updateCalendar.bind(this)
  }

  updateCalendar = () => {
    this.setState({
      calendarData: [{ 'start': new Date('September 27, 2019 08:00:00'), 'end': new Date('September 27, 2019 09:00:00') }]
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div class="card mb-5">
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
            <div class="accordion mt-5" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Add Employee
				</button>
                  </h2>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    <div class="row-lg-5">
                      <form>
                        <div class="col-lg-5">
                          <div class="row my-lg-2">
                            <label for="name">Name:</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="" />
                          </div>
                          <div class="row">
                            <label for="position">Position:</label>
                            <input type="text" class="form-control" id="position" aria-describedby="emailHelp" placeholder="" />
                          </div>
                          <div class="row my-sm-4">
                            Availability:
								</div>
                          <div class="row my-sm-2">
                            <div class='col-lg-3'>
                              <label for="monday">Monday</label>
                            </div>
                            <div class='col-lg-4'>
                              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" checked /> Morning
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Noon
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Afternoon
											</label>
                              </div>
                            </div>
                            <p></p>
                          </div>

                          <div class="row my-sm-2">
                            <div class='col-lg-3'>
                              <label for="monday">Tuesday</label>
                            </div>
                            <div class='col-lg-4'>
                              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" checked /> Morning
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Noon
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Afternoon
											</label>
                              </div>
                            </div>
                            <p></p>
                          </div>

                          <div class="row my-sm-2">
                            <div class='col-lg-3'>
                              <label for="monday">Wednesday</label>
                            </div>
                            <div class='col-lg-4'>
                              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" checked /> Morning
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Noon

											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Afternoon
											</label>
                              </div>
                            </div>
                            <p></p>
                          </div>

                          <div class="row my-sm-2">
                            <div class='col-lg-3'>
                              <label for="monday">Thursday</label>
                            </div>
                            <div class='col-lg-4'>
                              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" checked /> Morning
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Noon
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Afternoon
											</label>
                              </div>
                            </div>
                            <p></p>
                          </div>

                          <div class="row my-sm-2">
                            <div class='col-lg-3'>
                              <label for="monday">Friday</label>
                            </div>
                            <div class='col-lg-4'>
                              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" checked /> Morning
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Noon
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Afternoon
											</label>
                              </div>
                            </div>
                            <p></p>
                          </div>
                          <div class="row my-sm-2">
                            <div class='col-lg-3'>
                              <label for="monday">Saturday</label>
                            </div>
                            <div class='col-lg-4'>
                              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" checked /> Morning
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Noon
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Afternoon
											</label>
                              </div>
                            </div>
                            <p></p>
                          </div>

                          <div class="row my-sm-2">
                            <div class='col-lg-3'>
                              <label for="monday">Sunday</label>
                            </div>
                            <div class='col-lg-4'>
                              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" checked /> Morning
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Noon
											</label>
                                <label class="btn btn-info">
                                  <input type="checkbox" name="options" id="availability" autocomplete="off" /> Afternoon
											</label>
                              </div>
                            </div>
                            <p></p>
                          </div>

                          <div class="row my-lg-3">
                            <button type="submit" class="btn btn-primary">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Delete Employee
					</button>
                  </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">

                    <div class="row-lg-5">
                      <form>
                        <div class="col-lg-3">
                          <div class="row my-lg-2">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="" />
                          </div>

                          <div class="row my-lg-3">
                            <button type="submit" class="btn btn-primary">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Business Analytics
					</button>
                  </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
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
