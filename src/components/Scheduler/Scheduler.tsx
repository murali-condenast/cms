import { useState } from "react";
import { TextField, Button, DialogActions } from "@mui/material";
import {
  ProcessedEvent,
  Scheduler,
  SchedulerHelpers
} from "@aldabil/react-scheduler";
import MultiSelectDropDown from "./components/MultiSelectDropDown";

const adList = [
  "Ad 1",
  "Ad 2",
  "Ad 3",
  "Ad 4"
];

const platforms = [
  "Email",
  "SMS",
  "LinkedIN",
  "Facebook",
  "Instagram"
];

interface CustomEditorProps {
  scheduler: SchedulerHelpers;
}
const CustomEditor = ({ scheduler }: CustomEditorProps) => {
  const event = scheduler.edited;

  // Make your own form/state
  const [state, setState] = useState({
    title: event?.title || "",
    description: event?.description || ""
  });
  const [error, setError] = useState(null);

  const handleChange = (value: string, name: string) => {
    setState((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };
  const handleSubmit = async () => {
    // Your own validation
    if (state.title.length < 3) {
      return setError({ ...error, title: "Min 3 letters" });
    }

    try {
      scheduler.loading(true);

      /**Simulate remote data saving */
      const added_updated_event = (await new Promise((res) => {
        /**
         * Make sure the event have 4 mandatory fields
         * event_id: string|number
         * title: string
         * start: Date|string
         * end: Date|string
         */
        setTimeout(() => {
          res({
            event_id: event?.event_id || Math.random(),
            title: state.title,
            start: scheduler.state.start.value,
            end: scheduler.state.end.value,
            description: state.description
          });
        }, 3000);
      })) as ProcessedEvent;

      scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
      scheduler.close();
    } finally {
      scheduler.loading(false);
    }
  };
  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <p>Schedule an Advertisement</p>
        <div style={{ padding: "1rem" }}>
          <TextField
            label="Title"
            value={state.title}
            onChange={(e) => handleChange(e.target.value, "title")}
            error={!!error}
            helperText={!!error && error["title"]}
            fullWidth
          />
        </div>
       <div style={{ padding: "1rem" }}>
        <TextField
            label="Description"
            value={state.description}
            onChange={(e) => handleChange(e.target.value, "description")}
            fullWidth
          />
       </div>        
        <MultiSelectDropDown title="Templates" data={adList}/>
        <MultiSelectDropDown title="Platforms" data={platforms}/>
      </div>
      <DialogActions>
        <Button onClick={scheduler.close}>Cancel</Button>
        <Button onClick={handleSubmit}>Confirm</Button>
      </DialogActions>
    </div>
  );
};

function App() {
  return (
    <Scheduler
      customEditor={(scheduler) => <CustomEditor scheduler={scheduler} />}
      viewerExtraComponent={(fields, event) => {
        return (
          <div>
            <p>Useful to render custom fields...</p>
            <p>Description: {event.description || "Nothing..."}</p>
          </div>
        );
      }}
    />
  );
}

export default App;
