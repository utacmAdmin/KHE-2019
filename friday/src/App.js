import React from 'react';
import AvailableTimes from 'react-available-times';

function App() {
  // const [schedule, setSchedule] = useState(defaultSchedule);

  return (
    <div>
      <AvailableTimes
        weekStartsOn="sunday"
        calendars={[
          {
            id: 'work',
            title: 'Work',
            foregroundColor: '#ff00ff',
            backgroundColor: '#f0f0f0',
            selected: true,
          },
        ]}
        // onChange={(selections) => {
        //   selections.forEach(({ start, end }) => {
        //     console.log('Start:', start, 'End:', end);
        //   })
        // }}
        // onEventsRequested={({ calendarId, start, end, callback }) => {
        //   loadMoreEvents(calendarId, start, end).then(callback);
        // }}
        initialSelections={[
          { start: new Date('September 28, 2019 08:00:00'), end: new Date('September 28, 2019 09:00:00'), title: 'Jan', calendarId: 'Jan' }
        ]}
        height={600}
        recurring={false}
        availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']}
        availableHourRange={{ start: 9, end: 22 }}
      />
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
							<div class="col-lg-3">
								<div class="row my-lg-2">
									<label for="name">Name</label>
									<input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder=""/>
								</div>

								<div class="row">						
									<label for="position">Position</label>
									<input type="text" class="form-control" id="position" aria-describedby="emailHelp" placeholder=""/>
								</div>

								<div class="row my-lg-2">
									<label for="availability">Availability</label>
										<div class="btn-group btn-group-toggle" data-toggle="buttons">
											<label class="btn btn-info">
												<input type="checkbox" name="options" id="availability" autocomplete="off" checked/> Morning
											</label>
											<label class="btn btn-info">
												<input type="checkbox" name="options" id="availability" autocomplete="off"/>Noon
											</label>
											<label class="btn btn-info">
												<input type="checkbox" name="options" id="availability" autocomplete="off"/> Afternoon
											</label>
										</div>								
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

export default App;
