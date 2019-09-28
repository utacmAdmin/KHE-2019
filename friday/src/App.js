import React from 'react';
import AvailableTimes from 'react-available-times';

function App() {
  // const [schedule, setSchedule] = useState(defaultSchedule);

  return (
    <div>
      <div class="card">
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
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
    </div >
  );
}

export default App;
